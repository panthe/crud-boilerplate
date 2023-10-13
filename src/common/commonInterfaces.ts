import { ApiResponse } from './commonClasses.ts';
import { AlignType, CrudID, GridColumnsFormattingType, Paths } from './commonTypes.ts';

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

export interface GridColumnOption<T extends IBaseModel> {
  visible: boolean;
  position: number;
  linkedField: Paths<T>;
  type: string;
  align: AlignType;
  width: string;
  sortable: boolean;
  formatType: GridColumnsFormattingType;
}

export interface IBaseRepository<T extends IBaseModel> {
  element: T | undefined;
  list: IListResponse<T>;
  gridColumnOptions: GridColumnOption<T>[];

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
