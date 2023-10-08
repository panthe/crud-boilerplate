import { useAppDispatch } from '../store';
import { useEffect, useState } from 'react';
import { ApiResponse, BaseRepository } from './commonClasses.ts';
import { AxiosError } from 'axios';
import { ACT_SET, MODULE, TYPE_LIST } from './commonConstants.ts';
import { IBaseModel } from './commonInterfaces.ts';

interface Props<T extends IBaseModel> {
  moduleName: MODULE;
  repository: BaseRepository<T>;
  updateStore?: boolean;
}

interface Return<T> {
  fetchDataList: () => void;
  setFormElement: React.Dispatch<React.SetStateAction<T | undefined>>;
  dataList?: T[];
  formElement?: T;
}

export const useList = <T extends IBaseModel>({
  moduleName,
  repository,
  updateStore = true,
}: Props<T>): Return<T> => {
  const dispatch = useAppDispatch();
  const [formElement, setFormElement] = useState<T | undefined>(repository.element);
  const [dataList, setDataList] = useState<T[]>(repository.list);

  const fetchDataList = () => {
    repository
      .getMany()
      .then((response: ApiResponse<T[]>) => {
        response?.data && setData(response?.data);
      })
      .catch((err: AxiosError) => console.log(err.code));
  };

  const setData = async (data: T[]) => {
    updateStore &&
      (await dispatch({ type: `${moduleName}/${TYPE_LIST}/${ACT_SET}`, payload: data }));
    repository.list = data;
    setDataList(data);
    console.log('useList', repository.list);
  };

  useEffect(() => {
    fetchDataList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    fetchDataList,
    dataList,
    setFormElement,
    formElement,
  };
};
