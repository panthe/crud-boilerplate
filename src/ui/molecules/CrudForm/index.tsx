import { ReactElement, useEffect } from 'react';
import { FormProvider, SubmitHandler } from 'react-hook-form';
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
  const onSubmit: SubmitHandler<T> = (data) => console.log('onSubmit', data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <CrudTitle moduleName={moduleName} />
        <CrudBody formElement={formElement} />
        <CrudButtons />
      </form>
    </FormProvider>
  );
};

export default CrudForm;
