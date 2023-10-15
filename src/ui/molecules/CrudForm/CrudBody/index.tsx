import { IBaseModel, IListFetchParams } from '../../../../common/commonInterfaces.ts';
import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { BaseRepository } from '../../../../common/commonClasses.ts';

interface Props<T extends IBaseModel, Q extends IListFetchParams> {
  repository: BaseRepository<T, Q>;
}

const CrudBody = <T extends IBaseModel, Q extends IListFetchParams>({
  repository,
}: Props<T, Q>): ReactElement => {
  const { register } = useFormContext();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {repository.formFieldsOptions
        .filter((col) => col.visible)
        .sort((col1, col2) => col1.position - col2.position)
        .map((col, index) => (
          <div style={{ display: 'flex' }}>
            <div style={{ width: '200px' }}>
              <b>{col.linkedField}</b>
            </div>
            <div style={{ width: '200px' }}>
              <input
                key={`${col.linkedField}${index}`}
                {...register(col.linkedField)}
                style={{ width: '400px' }}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default CrudBody;
