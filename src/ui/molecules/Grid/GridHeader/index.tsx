import { ReactElement } from 'react';
import { IBaseModel } from '../../../../common/commonInterfaces.ts';

interface Props<T extends IBaseModel> {
  element: T;
}

const GridHeader = <T extends IBaseModel>({ element }: Props<T>): ReactElement => {
  return (
    <thead>
      <tr>
        {Object.keys(element).map((k) => (
          <th key={k} align="left">
            {k.toUpperCase()}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default GridHeader;
