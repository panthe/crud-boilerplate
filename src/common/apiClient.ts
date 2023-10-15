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
    this.initializeResponseInterceptor().then();
    return this.instance;
  }

  private initializeResponseInterceptor = async () => {
    this.instance?.interceptors.response.use(this.handleResponse, this.handleError);
    const accessToken = localStorage.getItem('accessToken');
    console.log({ accessToken });
    this.instance?.interceptors.request.use((config: any) => {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      return config;
    });
  };

  private handleResponse = (axiosResponse: AxiosResponse) => axiosResponse;

  private handleError = (error: any) => Promise.reject(error);
}
