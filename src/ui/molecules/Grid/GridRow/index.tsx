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
      {repository.gridColumnOptions.map(
        (k, index) =>
          k.visible && (
            <td key={`${String(k.linkedField)}${index}`} align={k.align} width={k.width}>
              {getNestedUnknownFieldByPath(element as JsonKeyValue, k.linkedField)}
            </td>
          )
      )}
    </tr>
  );
};

export default GridRow;
