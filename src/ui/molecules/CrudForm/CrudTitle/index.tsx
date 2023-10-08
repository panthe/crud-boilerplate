import { ReactElement } from 'react';
import { MODULE } from '../../../../common/commonConstants.ts';

interface Props {
  moduleName: MODULE;
}

const CrudTitle = ({ moduleName }: Props): ReactElement => {
  return <div>FORM {moduleName}</div>;
};

export default CrudTitle;
