import { BaseRepository } from '../../../common/commonClasses.ts';
import { ReactElement, useEffect } from 'react';
import { useList } from '../../../common/useList.ts';
import GridRow from './GridRow';
import { BaseModel } from '../../../common/commonInterfaces.ts';
import GridHeader from './GridHeader';
import CrudForm from '../CrudForm';

interface Props<T extends BaseModel> {
  moduleNameList: string;
  moduleNameElement: string;
  repository: BaseRepository<T>;
  updateStore?: boolean;
}

const Grid = <T extends BaseModel>({
  moduleNameList,
  moduleNameElement,
  repository,
  updateStore = true,
}: Props<T>): ReactElement => {
  const { fetchDataList, dataList, setFormElement, formElement } = useList<T>({
    moduleName: moduleNameList,
    repository,
    updateStore,
  });

  useEffect(() => {
    fetchDataList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log({ formElement });
  }, [formElement]);

  return (
    <div>
      <h2>Users</h2>
      <table>
        {dataList?.map((element, index) =>
          index === 0 ? (
            <>
              <GridHeader element={element} />
              <GridRow element={element} setFormElement={setFormElement} />
            </>
          ) : (
            <GridRow element={element} setFormElement={setFormElement} />
          )
        )}
      </table>
      {formElement && (
        <CrudForm<T>
          moduleName={moduleNameElement}
          repository={repository}
          updateStore={updateStore}
          formElement={formElement}
        />
      )}
    </div>
  );
};

export default Grid;
