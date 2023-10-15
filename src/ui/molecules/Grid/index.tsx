import { BaseRepository } from '../../../common/commonClasses.ts';
import { ReactElement, useRef } from 'react';
import { useList } from '../../../common/useList.ts';
import GridRow from './GridRow';
import { IBaseModel, IListFetchParams } from '../../../common/commonInterfaces.ts';
import GridHeader from './GridHeader';
import CrudForm from '../CrudForm';
import { MODULE } from '../../../common/commonTypes.ts';

interface Props<T extends IBaseModel, Q extends IListFetchParams> {
  moduleName: MODULE;
  repository: BaseRepository<T, Q>;
  updateStore?: boolean;
}

const Grid = <T extends IBaseModel, Q extends IListFetchParams>({
  moduleName,
  repository,
  updateStore = true,
}: Props<T, Q>): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setFormElement, formElement, setParams } = useList<T, Q>({
    moduleName,
    repository,
    updateStore,
  });

  return (
    <div>
      <h2>{moduleName.toUpperCase()}</h2>
      <input ref={inputRef} key="search" type="text" id="search" autoComplete="off" />
      <input
        type="submit"
        value="Search"
        onClick={() => setParams({ search: String(inputRef?.current?.value) } as Q)}
      />
      <table>
        {repository.list?.data?.length > 0 && (
          <>
            <GridHeader key={'header'} repository={repository} />
            <tbody>
              {repository.list?.data?.map((element) => (
                <GridRow
                  key={element.id}
                  repository={repository}
                  element={element}
                  setFormElement={setFormElement}
                />
              ))}
            </tbody>
          </>
        )}
      </table>
      {formElement && (
        <CrudForm<T>
          moduleName={moduleName}
          repository={repository}
          updateStore={updateStore}
          formElement={formElement}
        />
      )}
    </div>
  );
};

export default Grid;
