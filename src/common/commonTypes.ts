export type CrudID = number | string | undefined;

export type AlignType = 'center' | 'left' | 'right' | 'justify' | 'char' | undefined;

export type JsonKeyValue = Record<string, never>;

export type Join<K extends string, P extends string> = `${K}${'' extends P ? '' : '.'}${P}`;

export type Paths<T> = T extends object
  ? { [K in keyof T]-?: K extends string ? `${K}` | Join<K, Paths<T[K]>> : never }[keyof T]
  : never;
