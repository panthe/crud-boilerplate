import { ReactElement } from 'react';
import { IBaseModel } from '../../../../common/commonInterfaces.ts';
import { BaseRepository } from '../../../../common/commonClasses.ts';
import { gridFieldsFormatRules } from '../../../../utils/gridFieldsFormatRules.tsx';

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
