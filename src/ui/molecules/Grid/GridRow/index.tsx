import { ReactElement } from 'react';
import { IBaseModel, IListFetchParams } from '../../../../common/commonInterfaces.ts';
import { BaseRepository } from '../../../../common/commonClasses.ts';
import { gridFieldsFormatRules } from '../../../../utils/gridFieldsFormatRules.tsx';

interface Props<T extends IBaseModel, Q extends IListFetchParams> {
  repository: BaseRepository<T, Q>;
  element: T;
  setFormElement: React.Dispatch<React.SetStateAction<T | undefined>>;
}

const GridRow = <T extends IBaseModel, Q extends IListFetchParams>({
  repository,
  element,
  setFormElement,
}: Props<T, Q>): ReactElement => {
  return (
    <tr onClick={() => setFormElement(element)}>
      {repository.gridFieldsOptions
        .filter((col) => col.visible)
        .sort((col1, col2) => col1.position - col2.position)
        .map((col, index) => (
          <td key={`${String(col.linkedField)}${index}`} align={col.align} width={col.width}>
            {gridFieldsFormatRules(element, col.linkedField, col.formatType)}
          </td>
        ))}
    </tr>
  );
};

export default GridRow;
