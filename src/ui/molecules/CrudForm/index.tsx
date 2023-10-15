import { ReactElement, useEffect } from 'react';
import { FormProvider, SubmitHandler } from 'react-hook-form';
import { BaseRepository } from '../../../common/commonClasses.ts';
import { useCrud } from '../../../common/useCrud.ts';
import { IBaseModel, IListFetchParams } from '../../../common/commonInterfaces.ts';
import CrudTitle from './CrudTitle';
import CrudButtons from './CrudButtons';
import CrudBody from './CrudBody';
import { MODULE } from '../../../common/commonTypes.ts';

interface Props<T extends IBaseModel, Q extends IListFetchParams> {
  moduleName: MODULE;
  repository: BaseRepository<T, Q>;
  formElement: T;
  updateStore?: boolean;
}

const CrudForm = <T extends IBaseModel, Q extends IListFetchParams>({
  moduleName,
  repository,
  formElement,
  updateStore = true,
}: Props<T, Q>): ReactElement => {
  const { methods, fetchDataElement } = useCrud<T>({
    moduleName,
    repository,
    updateStore,
    id: formElement.id,
  });

  useEffect(() => {
    formElement?.id && fetchDataElement();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formElement?.id]);

  const onSubmit: SubmitHandler<T> = (data) => {
    console.log('onSubmit', data);
    const response = repository.createOrUpdate(formElement.id, data);
    console.log({ response });
    const responseMany = repository.getMany();
    console.log({ responseMany });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <CrudTitle moduleName={moduleName} />
        <CrudBody repository={repository} />
        <CrudButtons />
      </form>
    </FormProvider>
  );
};

export default CrudForm;
