import { ReactElement } from 'react';
import { BaseModel } from '../../../../common/commonInterfaces.ts';

interface Props<T extends BaseModel> {
  element: T;
  setFormElement: React.Dispatch<React.SetStateAction<T | undefined>>;
}

const GridRow = <T extends BaseModel>({ element, setFormElement }: Props<T>): ReactElement => {
  return (
    <tr key={element.id} onClick={() => setFormElement(element)}>
      {Object.values(element).map((value) => {
        if (typeof value === 'object') {
          return <td></td>;
        }
        return <td>{value}</td>;
      })}
    </tr>
  );
};

export default GridRow;
