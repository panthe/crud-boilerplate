import { ReactElement } from 'react';
import { IBaseModel } from '../../../../common/commonInterfaces.ts';
import { BaseRepository } from '../../../../common/commonClasses.ts';
import { findNestedProp } from '../../../../common/commonFunctions.ts';

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
            <td key={`${String(k.linkedField)}${index}`} align={k.align}>
              {findNestedProp(element, k.linkedField)}
            </td>
          )
      )}
    </tr>
  );
};

export default GridRow;
