import { ApiResponse } from './commonClasses.ts';

export type CrudID = number | string | undefined;

export interface BaseModel {
  id?: CrudID;
  created?: Date;
  updated?: Date;
}

export interface KeyValue {
  id: CrudID;
  description?: string;
}

export interface IBaseRepository<T extends BaseModel> {
  get(id: CrudID): Promise<ApiResponse<T>>;
  getMany(): Promise<ApiResponse<T[]>>;
  create(item: T): Promise<ApiResponse<T>>;
  update(id: CrudID, item: T): Promise<ApiResponse<T>>;
  delete(id: CrudID): Promise<ApiResponse<T>>;
}
