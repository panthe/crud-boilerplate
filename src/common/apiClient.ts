import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { BASE_URL } from './commonConstants.ts';

export abstract class HttpClient {
  protected instance: AxiosInstance | undefined;

  protected createInstance(): AxiosInstance {
    this.instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.initializeResponseInterceptor();
    return this.instance;
  }

  private initializeResponseInterceptor = () => {
    this.instance?.interceptors.response.use(this.handleResponse, this.handleError);
    const token = localStorage.getItem('jwtToken');
    this.instance?.interceptors.request.use((config: any) => {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
      return config;
    });
  };

  private handleResponse = (axiosResponse: AxiosResponse) => axiosResponse;

  private handleError = (error: any) => Promise.reject(error);
}
