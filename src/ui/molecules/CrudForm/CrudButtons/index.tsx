import { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';

const CrudButtons = (): ReactElement => {
  const {
    reset,
    formState: { isDirty, dirtyFields },
  } = useFormContext();
  console.log({ isDirty }, { dirtyFields });
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>Button Section - isDirty {String(isDirty)}</div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginRight: '1rem' }}>
          <input type="button" value="Annulla" onClick={reset} />
        </div>
        <div>{isDirty && <input type="submit" value="Salva" />}</div>
      </div>
    </div>
  );
};

export default CrudButtons;
