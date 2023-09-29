import { ApiResponse } from './commonClasses.ts';

export interface BaseModel {
  id?: number | string;
  created?: Date;
  updated?: Date;
}

export interface KeyValue {
  id: number;
  description?: string;
}

export interface IBaseRepository<T> {
  get(id: number | string): Promise<ApiResponse<T>>;
  getMany(): Promise<ApiResponse<T[]>>;
  create(item: T): Promise<ApiResponse<T>>;
  update(id: number | string, item: T): Promise<ApiResponse<T>>;
  delete(id: number | string): Promise<ApiResponse<T>>;
}
