import { useAppDispatch } from '../store';
import { useEffect, useState } from 'react';
import { ApiResponse, BaseRepository } from './commonClasses.ts';
import { AxiosError } from 'axios';
import { ACT_SET, TYPE_LIST } from './commonConstants.ts';
import { IBaseModel, IListFetchParams, IListResponse } from './commonInterfaces.ts';
import { MODULE } from './commonTypes.ts';

interface Props<T extends IBaseModel, Q extends IListFetchParams> {
  moduleName: MODULE;
  repository: BaseRepository<T, Q>;
  updateStore?: boolean;
}

interface Return<T extends IBaseModel, Q extends IListFetchParams> {
  fetchDataList: () => void;
  setFormElement: React.Dispatch<React.SetStateAction<T | undefined>>;
  setParams: React.Dispatch<React.SetStateAction<Q | undefined>>;
  dataList: IListResponse<T>;
  formElement?: T;
  params?: Q;
}

export const useList = <T extends IBaseModel, Q extends IListFetchParams>({
  moduleName,
  repository,
  updateStore = true,
}: Props<T, Q>): Return<T, Q> => {
  const dispatch = useAppDispatch();
  const [formElement, setFormElement] = useState<T | undefined>(repository.element);
  const [dataList, setDataList] = useState<IListResponse<T>>(repository.list);
  const [params, setParams] = useState<Q>();

  const fetchDataList = () => {
    repository
      .getMany(params)
      .then((response: ApiResponse<IListResponse<T>>) => {
        response?.data && setData(response?.data);
      })
      .catch((err: AxiosError) => console.log(err.code));
  };

  const setData = async (data: IListResponse<T>) => {
    console.log({ data });
    updateStore &&
      (await dispatch({ type: `${moduleName}/${TYPE_LIST}/${ACT_SET}`, payload: data }));
    repository.list = data;
    setDataList(data);
    console.log('useList', repository.list);
  };

  useEffect(() => {
    fetchDataList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return {
    fetchDataList,
    dataList,
    setFormElement,
    formElement,
    setParams,
    params,
  };
};
