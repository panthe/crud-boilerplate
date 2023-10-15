import dayjs from 'dayjs';
import { DATE_FORMAT } from '../common/commonConstants.ts';

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
