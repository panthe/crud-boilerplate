import { ApiResponse } from './commonClasses.ts';
import {
  AlignType,
  AxiosMethods,
  CrudID,
  FormFieldFormattingType,
  GridFieldFormattingType,
  Paths,
} from './commonTypes.ts';

export interface ILogin {
  email: string;
  password: string;
}

export interface IKeyValue {
  id: CrudID;
  description?: string;
}

export interface IBaseModel {
  id?: CrudID;
  created?: Date;
  updated?: Date;
}

export interface IListResponse<T extends IBaseModel> {
  data: T[];
  totalCount: number;
}

export interface GridFieldOption<T extends IBaseModel> {
  visible: boolean;
  position: number;
  linkedField: Paths<T>;
  type: string;
  align: AlignType;
  width: string;
  sortable: boolean;
  formatType: GridFieldFormattingType;
}

export interface FormFieldOption<T extends IBaseModel> {
  visible: boolean;
  position: number;
  linkedField: Paths<T>;
  type: string;
  width: string;
  formatType: FormFieldFormattingType;
}

export interface IBaseRepository<T extends IBaseModel, Q extends IListFetchParams> {
  element: T | undefined;
  list: IListResponse<T>;
  gridFieldsOptions: GridFieldOption<T>[];

  get(id: CrudID): Promise<ApiResponse<T>>;
  getMany(params?: Q): Promise<ApiResponse<IListResponse<T>>>;
  create(item: T): Promise<ApiResponse<T>>;
  update(id: CrudID, item: T): Promise<ApiResponse<T>>;
  delete(id: CrudID): Promise<ApiResponse<T>>;
  createOrUpdate(id: CrudID, item: T): Promise<ApiResponse<T>>;
}

export interface IQueryString {
  [key: string]: string | string[] | number[] | number | boolean | IKeyValue | null | undefined;
}

export interface IListFetchParams {
  search: string;
  skip: number;
  take: number;
}

export interface FetchWrapper {
  url: string;
  method: AxiosMethods;
  body?: object;
}

export interface FetchResponse<T> {
  status: number;
  statusText: string;
  ok: boolean;
  type: string;
  url: string;
  data?: T;
  errors?: Array<{ message: string }>;
}

export interface ParamsUrl {
  url: string;
  params?: {
    [key: string]: string | string[] | number[] | number | boolean | null | undefined | never;
  };
}

export interface MultipartUrl {
  url: string;
  formData: FormData;
}
