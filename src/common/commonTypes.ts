import {
  ACT_SET,
  MN_USERS,
  GET,
  POST,
  PATCH,
  DELETE,
  MULTIPART,
  MN_STAFF,
} from './commonConstants.ts';

export type CrudID = number | string | undefined;
export type MODULE = typeof MN_USERS | typeof MN_STAFF;
export type ACTIONS = typeof ACT_SET;

export type AlignType = 'center' | 'left' | 'right' | 'justify' | 'char' | undefined;

export type JsonKeyValue = Record<string, never>;

export type Join<K extends string, P extends string> = `${K}${'' extends P ? '' : '.'}${P}`;

export type Paths<T> = T extends object
  ? { [K in keyof T]-?: K extends string ? `${K}` | Join<K, Paths<T[K]>> : never }[keyof T]
  : never;

export type GridFieldFormattingType =
  | undefined
  | 'string'
  | 'number'
  | 'currency'
  | 'percentage'
  | 'date';

export type FormFieldFormattingType = 'string' | 'number' | 'currency' | 'percentage' | 'date';

export type AxiosMethods =
  | typeof GET
  | typeof POST
  | typeof PATCH
  | typeof DELETE
  | typeof MULTIPART;
