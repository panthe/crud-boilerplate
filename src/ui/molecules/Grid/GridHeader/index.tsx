import { ReactElement } from 'react';
import { BaseModel } from '../../../../common/commonInterfaces.ts';

interface Props<T extends BaseModel> {
  element: T;
}

const GridHeader = <T extends BaseModel>({ element }: Props<T>): ReactElement => {
  return (
    <tr>
      {Object.keys(element).map((k) => (
        <th>{k.toUpperCase()}</th>
      ))}
    </tr>
  );
};

export default GridHeader;
