import { ReactElement, useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import { BaseRepository } from '../../../common/commonClasses.ts';
import { useCrud } from '../../../common/useCrud.ts';
import { BaseModel } from '../../../common/commonInterfaces.ts';
import CrudTitle from './CrudTitle';
import CrudButtons from './CrudButtons';
import CrudBody from './CrudBody';

interface Props<T extends BaseModel> {
  moduleName: string;
  repository: BaseRepository<T>;
  formElement: T;
  updateStore?: boolean;
}

const CrudForm = <T extends BaseModel>({
  moduleName,
  repository,
  formElement,
  updateStore = true,
}: Props<T>): ReactElement => {
  const { methods, fetchDataElement } = useCrud<T>({
    moduleName,
    repository,
    updateStore,
    id: formElement.id,
  });

  useEffect(() => {
    formElement?.id && fetchDataElement();
  }, [formElement?.id]);

  return (
    <FormProvider {...methods}>
      <CrudTitle moduleName={moduleName} />
      <CrudBody formElement={formElement} />
      <CrudButtons />
    </FormProvider>
  );
};

export default CrudForm;
