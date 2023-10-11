import { BaseRepository } from '../../../common/commonClasses.ts';
import { ReactElement, useRef } from 'react';
import { useList } from '../../../common/useList.ts';
import GridRow from './GridRow';
import { IBaseModel } from '../../../common/commonInterfaces.ts';
import GridHeader from './GridHeader';
import CrudForm from '../CrudForm';
import { MODULE } from '../../../common/commonTypes.ts';

interface Props<T extends IBaseModel> {
  moduleName: MODULE;
  repository: BaseRepository<T>;
  updateStore?: boolean;
}

const Grid = <T extends IBaseModel>({
  moduleName,
  repository,
  updateStore = true,
}: Props<T>): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setFormElement, formElement } = useList<T>({
    moduleName,
    repository,
    updateStore,
  });

  return (
    <div>
      <h2>Users</h2>
      <input ref={inputRef} key="search" type="text" id="search" autoComplete="off" />
      <input type="submit" value="Search" onClick={() => console.log(inputRef?.current?.value)} />
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
