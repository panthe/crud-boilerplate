import { ReactElement } from 'react';
import { IBaseModel } from '../../../../common/commonInterfaces.ts';
import { BaseRepository } from '../../../../common/commonClasses.ts';

interface Props<T extends IBaseModel> {
  repository: BaseRepository<T>;
}

const GridHeader = <T extends IBaseModel>({ repository }: Props<T>): ReactElement => {
  return (
    <thead>
      <tr>
        {repository.gridColumnOptions.map((k) => {
          const keys = String(k.linkedField).split('.');
          return (
            <th key={String(k.linkedField)} align={k.align}>
              {keys[keys.length - 1].toUpperCase()}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default GridHeader;
