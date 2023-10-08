import { IBaseModel } from '../../../../common/commonInterfaces.ts';
import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props<T extends IBaseModel> {
  formElement: T;
}

const CrudBody = <T extends IBaseModel>({ formElement }: Props<T>): ReactElement => {
  const { register } = useFormContext();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {Object.keys(formElement).map((k, index) => (
        <input key={`${k}${index}`} {...register(k)} />
      ))}
    </div>
  );
};

export default CrudBody;
