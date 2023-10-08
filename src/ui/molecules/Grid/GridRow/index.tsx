import { ReactElement } from 'react';
import { BaseModel } from '../../../../common/commonInterfaces.ts';

interface Props<T extends BaseModel> {
  element: T;
  setFormElement: React.Dispatch<React.SetStateAction<T | undefined>>;
}

const GridRow = <T extends BaseModel>({ element, setFormElement }: Props<T>): ReactElement => {
  return (
    <tr onClick={() => setFormElement(element)}>
      {Object.values(element).map((value, index) => {
        if (typeof value === 'object') {
          return <td key={`${value}${index}`}></td>;
        }
        return (
          <td key={value} align="left">
            {value}
          </td>
        );
      })}
    </tr>
  );
};

export default GridRow;
