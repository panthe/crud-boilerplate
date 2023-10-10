import { ReactElement } from 'react';
import { IBaseModel } from '../../../../common/commonInterfaces.ts';
import { BaseRepository } from '../../../../common/commonClasses.ts';
import { getNestedUnknownFieldByPath } from '../../../../common/commonFunctions.ts';
import { JsonKeyValue } from '../../../../common/commonTypes.ts';

interface Props<T extends IBaseModel> {
  repository: BaseRepository<T>;
  element: T;
  setFormElement: React.Dispatch<React.SetStateAction<T | undefined>>;
}

const GridRow = <T extends IBaseModel>({
  repository,
  element,
  setFormElement,
}: Props<T>): ReactElement => {
  return (
    <tr onClick={() => setFormElement(element)}>
      {repository.gridColumnOptions
        .filter((col) => col.visible)
        .sort((col1, col2) => col1.position - col2.position)
        .map((col, index) => (
          <td key={`${String(col.linkedField)}${index}`} align={col.align} width={col.width}>
            {getNestedUnknownFieldByPath(element as JsonKeyValue, col.linkedField)}
          </td>
        ))}
    </tr>
  );
};

export default GridRow;
