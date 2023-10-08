import {
  IBaseModel,
  CrudID,
  IBaseRepository,
  IQueryString,
  GridColumnOption,
} from './commonInterfaces.ts';
import { AxiosResponse } from 'axios';
import { HttpClient } from './apiClient.ts';
import { MODULE } from './commonConstants.ts';
import { queryString } from './commonFunctions.ts';

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

export abstract class BaseRepository<T extends IBaseModel>
  extends HttpClient
  implements IBaseRepository<T>
{
  private _moduleName: MODULE;
  private _element: T | undefined;
  private _list: T[];
  private _gridColumnOptions: GridColumnOption<T>[];

  constructor(moduleName: MODULE) {
    super();
    this._moduleName = moduleName;
    this._list = [];
    this._gridColumnOptions = [];
  }

  get moduleName(): MODULE {
    return this._moduleName;
  }

  get gridColumnOptions(): GridColumnOption<T>[] {
    return this._gridColumnOptions;
  }

  set gridColumnOptions(columns: GridColumnOption<T>[]) {
    this._gridColumnOptions = columns;
  }

  get list(): T[] {
    return this._list;
  }

  set list(data: T[]) {
    this._list = data;
  }

  get element(): T | undefined {
    return this._element;
  }

  set element(data: T | undefined) {
    this._element = data;
  }

  public async get(id: CrudID): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance.get(`/${this._moduleName.toLowerCase()}/${id}`).then(transform);
    return result as ApiResponse<T>;
  }

  public async getMany(params?: IQueryString): Promise<ApiResponse<T[]>> {
    const query = queryString(params) ?? '';
    const instance = this.createInstance();
    const result = await instance.get(`/${this._moduleName.toLowerCase()}${query}`).then(transform);
    return result as ApiResponse<T[]>;
  }

  public async create(item: T): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance.post(`/${this._moduleName.toLowerCase()}`, item).then(transform);
    return result as ApiResponse<T>;
  }

  public async update(id: CrudID, item: T): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance
      .put(`/${this._moduleName.toLowerCase()}/${id}`, item)
      .then(transform);
    return result as ApiResponse<T>;
  }

  public async delete(id: CrudID): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance
      .delete(`/${this._moduleName.toLowerCase()}/${id}`)
      .then(transform);
    return result as ApiResponse<T>;
  }

  public async createOrUpdate(id: CrudID, item: T): Promise<ApiResponse<T>> {
    return id ? this.update(id, item) : this.create(item);
  }
}
