import { GridFieldFormattingType, JsonKeyValue, Paths } from '../common/commonTypes.ts';
import { ReactElement } from 'react';
import dayjs from 'dayjs';
import { IBaseModel } from '../common/commonInterfaces.ts';
import { getNestedUnknownFieldByPath } from '../common/commonFunctions.ts';
import { DATE_FORMAT } from '../common/commonConstants.ts';

export const gridFieldFormatting = <T extends IBaseModel>(
  element: T,
  linkedField: Paths<T>,
  formattingType: GridFieldFormattingType
): ReactElement | string => {
  const value = getNestedUnknownFieldByPath(element as JsonKeyValue, linkedField);

  if (!formattingType || formattingType === 'string') return value;

  if (formattingType === 'number') {
    return value;
  }

  if (formattingType === 'currency') {
    return getCurrencyValue(value);
  }

  if (formattingType === 'percentage') {
    return getPercentageValue(value, 2);
  }

  if (formattingType === 'date') {
    return getDateValue(value);
  }

  return value;
};

export const stringToNumber = (value: number | string): number => {
  try {
    return value ? Number(value) : 0;
  } catch (e) {
    return 0;
  }
};

export const getCurrencyValue = (value: string): string => {
  return Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(
    stringToNumber(value)
  );
};

export const getPercentageValue = (value: number | string, decimal: number): string => {
  return `${stringToNumber(value).toFixed(decimal)} %`;
};

export const getDateValue = (value: Date): string => {
  return dayjs(value).format(DATE_FORMAT.DD_MM_YYYY_WITH_MINUS);
};
