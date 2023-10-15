import {
  FormFieldOption,
  GridFieldOption,
  IBaseModel,
  IBaseRepository,
  IListFetchParams,
  IListResponse,
} from './commonInterfaces.ts';
import { AxiosResponse } from 'axios';
import { HttpClient } from './apiClient.ts';
import { CrudID, MODULE } from './commonTypes.ts';
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

export abstract class BaseRepository<T extends IBaseModel, Q extends IListFetchParams>
  extends HttpClient
  implements IBaseRepository<T, Q>
{
  private _moduleName: MODULE;
  private _element: T | undefined;
  private _list: IListResponse<T>;
  private _gridColumnOptions: GridFieldOption<T>[];
  private _formFieldsOptions: FormFieldOption<T>[];

  constructor(moduleName: MODULE) {
    super();
    this._moduleName = moduleName;
    this._list = { data: [], totalCount: 0 };
    this._gridColumnOptions = [];
    this._formFieldsOptions = [];
  }

  get moduleName(): MODULE {
    return this._moduleName;
  }

  get formFieldsOptions(): FormFieldOption<T>[] {
    return this._formFieldsOptions;
  }

  set formFieldsOptions(columns: FormFieldOption<T>[]) {
    this._formFieldsOptions = columns;
  }

  get gridFieldsOptions(): GridFieldOption<T>[] {
    return this._gridColumnOptions;
  }

  set gridFieldsOptions(columns: GridFieldOption<T>[]) {
    this._gridColumnOptions = columns;
  }

  get list(): IListResponse<T> {
    return this._list;
  }

  set list(data: IListResponse<T>) {
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

  public async getMany(params?: Q): Promise<ApiResponse<IListResponse<T>>> {
    const query = params ? queryString<Q>(params) : '';
    const instance = this.createInstance();
    const result = await instance.get(`/${this._moduleName.toLowerCase()}${query}`).then(transform);
    return result as ApiResponse<IListResponse<T>>;
  }

  public async create(item: T): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const result = await instance.post(`/${this._moduleName.toLowerCase()}`, item).then(transform);
    return result as ApiResponse<T>;
  }

  public async update(id: CrudID, item: T): Promise<ApiResponse<T>> {
    const instance = this.createInstance();
    const itemToUpdate = { ...item };
    delete itemToUpdate['id'];
    delete itemToUpdate['createdAt'];
    delete itemToUpdate['updatedAt'];
    const result = await instance
      .patch(`/${this._moduleName.toLowerCase()}/${id}`, itemToUpdate)
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
