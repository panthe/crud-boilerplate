import { BaseModel, CrudID, IBaseRepository } from './commonInterfaces.ts';
import { AxiosResponse } from 'axios';
import { HttpClient } from './apiClient.ts';

export class ApiResponse<T> {
  data?: T;
  succeeded?: boolean;
  errors?: never;
}

const transform = (response: AxiosResponse): Promise<ApiResponse<never>> => {
  return new Promise((resolve) => {
    const result: ApiResponse<never> = {
      data: response.data,
      succeeded: response.status === 200,
      errors: response.data?.errors,
    };
    resolve(result);
  });
};

export abstract class BaseRepository<T extends BaseModel>
  extends HttpClient
  implements IBaseRepository<T>
{
  protected collection: string | undefined;

  public async get(id: CrudID): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance.get(`/${this.collection}/${id}`).then(transform);
    return result as ApiResponse<T>;
  }

  public async getMany(): Promise<ApiResponse<T[]>> {
    const instance = this.createInstance();
    const result = await instance.get(`/${this.collection}`).then(transform);
    return result as ApiResponse<T[]>;
  }

  public async create(item: T): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance.post(`/${this.collection}`, item).then(transform);
    return result as ApiResponse<T>;
  }

  public async update(id: CrudID, item: T): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance.put(`/${this.collection}/${id}`, item).then(transform);
    return result as ApiResponse<T>;
  }

  public async delete(id: CrudID): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance.delete(`/${this.collection}/${id}`).then(transform);
    return result as ApiResponse<T>;
  }
}
