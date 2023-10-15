import { IBaseModel } from '../../../../common/commonInterfaces.ts';
import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { BaseRepository } from '../../../../common/commonClasses.ts';

interface Props<T extends IBaseModel> {
  formElement: T;
  repository: BaseRepository<T>;
}

const CrudBody = <T extends IBaseModel>({ formElement }: Props<T>): ReactElement => {
  const { register } = useFormContext();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {Object.keys(formElement).map((k, index) => (
        <div style={{ display: 'flex' }}>
          <div style={{ width: '200px' }}>
            <b>{k}</b>
          </div>
          <div style={{ width: '200px' }}>
            <input key={`${k}${index}`} {...register(k)} style={{ width: '400px' }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CrudBody;
