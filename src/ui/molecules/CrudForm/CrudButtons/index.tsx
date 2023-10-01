import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';

const CrudButtons = (): ReactElement => {
  const {
    formState: { isDirty, dirtyFields },
  } = useFormContext();
  console.log({ isDirty }, { dirtyFields });
  return <div>Button Section - isDirty {String(isDirty)} </div>;
};

export default CrudButtons;
