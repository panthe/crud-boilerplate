import { FormFieldFormattingType, Paths } from '../common/commonTypes.ts';
import { ReactElement } from 'react';
import { IBaseModel } from '../common/commonInterfaces.ts';
import { UseFormRegister, FieldValues } from 'react-hook-form';

export const formFieldsFormatRules = <T extends IBaseModel>(
  linkedField: Paths<T>,
  formattingType: FormFieldFormattingType,
  index: number,
  register: UseFormRegister<FieldValues>
): ReactElement | string => {
  if (!formattingType) return '';

  return <input key={`${linkedField}${index}`} {...register(linkedField)} />;
};
