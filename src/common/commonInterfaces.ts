import { ApiResponse } from './commonClasses.ts';
import {
  AlignType,
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

export interface IBaseRepository<T extends IBaseModel> {
  element: T | undefined;
  list: IListResponse<T>;
  gridFieldsOptions: GridFieldOption<T>[];

  get(id: CrudID): Promise<ApiResponse<T>>;
  getMany(): Promise<ApiResponse<IListResponse<T>>>;
  create(item: T): Promise<ApiResponse<T>>;
  update(id: CrudID, item: T): Promise<ApiResponse<T>>;
  delete(id: CrudID): Promise<ApiResponse<T>>;
  createOrUpdate(id: CrudID, item: T): Promise<ApiResponse<T>>;
}

export interface IQueryString {
  [key: string]: string | string[] | number[] | number | boolean | IKeyValue | null | undefined;
}

export interface IListFetchParams {
  skip: number;
  limit: number;
}
