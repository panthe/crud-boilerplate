import { ReactElement } from 'react';
import { BaseModel } from '../../../../common/commonInterfaces.ts';

interface Props<T extends BaseModel> {
  element: T;
}

const GridHeader = <T extends BaseModel>({ element }: Props<T>): ReactElement => {
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
