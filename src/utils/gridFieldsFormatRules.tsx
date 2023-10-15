import { GridFieldFormattingType, JsonKeyValue, Paths } from '../common/commonTypes.ts';
import { ReactElement } from 'react';
import { IBaseModel } from '../common/commonInterfaces.ts';
import { getNestedUnknownFieldByPath } from '../common/commonFunctions.ts';
import { getCurrencyValue, getDateValue, getPercentageValue } from './helperFormatRules.tsx';

export const gridFieldsFormatRules = <T extends IBaseModel>(
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
