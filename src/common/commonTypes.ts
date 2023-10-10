import { ACT_SET, MN_USERS } from './commonConstants.ts';

export type CrudID = number | string | undefined;
export type MODULE = typeof MN_USERS;
export type ACTIONS = typeof ACT_SET;

export type AlignType = 'center' | 'left' | 'right' | 'justify' | 'char' | undefined;

export type JsonKeyValue = Record<string, never>;

export type Join<K extends string, P extends string> = `${K}${'' extends P ? '' : '.'}${P}`;

export type Paths<T> = T extends object
  ? { [K in keyof T]-?: K extends string ? `${K}` | Join<K, Paths<T[K]>> : never }[keyof T]
  : never;

export type GridColumnsFormattingType =
  | undefined
  | 'string'
  | 'number'
  | 'currency'
  | 'percentage'
  | 'date';
