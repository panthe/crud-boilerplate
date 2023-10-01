import { BaseModel } from '../../../../common/commonInterfaces.ts';
import { ReactElement } from 'react';

interface Props<T extends BaseModel> {
  moduleName: string;
  formElement: T;
}

const CrudBody = <T extends BaseModel>({ moduleName, formElement }: Props<T>): ReactElement => {
  return <div>{formElement.id}</div>;
};

export default CrudBody;
