import { ReactElement } from 'react';
import { IBaseModel, IListFetchParams } from '../../../../common/commonInterfaces.ts';
import { BaseRepository } from '../../../../common/commonClasses.ts';

interface Props<T extends IBaseModel, Q extends IListFetchParams> {
  repository: BaseRepository<T, Q>;
}

const GridHeader = <T extends IBaseModel, Q extends IListFetchParams>({
  repository,
}: Props<T, Q>): ReactElement => {
  return (
    <thead>
      <tr>
        {repository.gridFieldsOptions
          .filter((col) => col.visible)
          .sort((col1, col2) => col1.position - col2.position)
          .map((col) => {
            const nestedFields = String(col.linkedField).split('.');
            return (
              <th key={String(col.linkedField)} align={col.align}>
                {nestedFields[nestedFields.length - 1].toUpperCase()}
              </th>
            );
          })}
      </tr>
    </thead>
  );
};

export default GridHeader;
