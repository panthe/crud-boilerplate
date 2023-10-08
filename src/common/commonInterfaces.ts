import { ApiResponse } from './commonClasses.ts';

export type CrudID = number | string | undefined;

export interface IBaseModel {
  id?: CrudID;
  created?: Date;
  updated?: Date;
}

export interface IKeyValue {
  id: CrudID;
  description?: string;
}

export interface IBaseRepository<T extends IBaseModel> {
  element: T | undefined;
  list: T[];

  get(id: CrudID): Promise<ApiResponse<T>>;
  getMany(): Promise<ApiResponse<T[]>>;
  create(item: T): Promise<ApiResponse<T>>;
  update(id: CrudID, item: T): Promise<ApiResponse<T>>;
  delete(id: CrudID): Promise<ApiResponse<T>>;
  createOrUpdate(id: CrudID, item: T): Promise<ApiResponse<T>>;
}

export interface IListFetchParams {
  skip: number;
  limit: number;
}
