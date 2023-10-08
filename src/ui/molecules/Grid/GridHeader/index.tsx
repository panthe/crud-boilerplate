import { ReactElement } from 'react';
import { IBaseModel } from '../../../../common/commonInterfaces.ts';
import { BaseRepository } from '../../../../common/commonClasses.ts';

interface Props<T extends IBaseModel> {
  element: T;
  repository: BaseRepository<T>;
}

const GridHeader = <T extends IBaseModel>({ repository }: Props<T>): ReactElement => {
  return (
    <thead>
      <tr>
        {repository.gridColumnOptions.map((k) => (
          <th key={String(k.linkedField)} align={k.align}>
            {String(k.linkedField).toUpperCase()}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default GridHeader;
