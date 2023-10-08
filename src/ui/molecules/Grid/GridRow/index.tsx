import { ReactElement } from 'react';
import { IBaseModel } from '../../../../common/commonInterfaces.ts';

interface Props<T extends IBaseModel> {
  element: T;
  setFormElement: React.Dispatch<React.SetStateAction<T | undefined>>;
}

const GridRow = <T extends IBaseModel>({ element, setFormElement }: Props<T>): ReactElement => {
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
