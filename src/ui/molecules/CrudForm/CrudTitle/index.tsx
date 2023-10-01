import { ReactElement } from 'react';

interface Props {
  moduleName: string;
}

const CrudTitle = ({ moduleName }: Props): ReactElement => {
  return <div>{moduleName}</div>;
};

export default CrudTitle;