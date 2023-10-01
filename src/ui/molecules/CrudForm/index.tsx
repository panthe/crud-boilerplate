import { ReactElement } from 'react';
import { BaseRepository } from '../../../common/commonClasses.ts';
import { useCrud } from '../../../common/useCrud.ts';
import { BaseModel } from '../../../common/commonInterfaces.ts';
import CrudTitle from './CrudTitle';
import CrudButtons from './CrudButtons';
import CrudBody from './CrudBody';

interface Props<T extends BaseModel> {
  moduleName: string;
  repository: BaseRepository<T>;
  updateStore?: boolean;
  formElement: T;
}

const CrudForm = <T extends BaseModel>({
  moduleName,
  repository,
  updateStore = true,
  formElement,
}: Props<T>): ReactElement => {
  useCrud<T>({
    moduleName,
    repository,
    updateStore,
    id: formElement.id,
  });

  return (
    <div>
      <CrudTitle moduleName={moduleName} />
      <CrudBody moduleName={moduleName} formElement={formElement} />
      <CrudButtons />
    </div>
  );
};

export default CrudForm;
