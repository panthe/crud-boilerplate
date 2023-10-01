import { useAppDispatch } from '../store';
import { useState } from 'react';
import { ApiResponse, BaseRepository } from './commonClasses.ts';
import { AxiosError } from 'axios';
import { ACT_SET } from './commonConstants.ts';

interface Props<T> {
  moduleName: string;
  repository: BaseRepository<T>;
  updateStore?: boolean;
}

interface Return<T> {
  fetchDataList: () => void;
  dataList: T[];
}

export const useList = <T>({ moduleName, repository, updateStore = true }: Props<T>): Return<T> => {
  const dispatch = useAppDispatch();
  const [dataList, setDataList] = useState<T[]>([]);

  const fetchDataList = () => {
    repository
      .getMany()
      .then((response: ApiResponse<T[]>) => {
        response?.data && setData(response?.data);
      })
      .catch((err: AxiosError) => console.log(err.code));
  };

  const setData = async (data: T[]) => {
    updateStore && (await dispatch({ type: `${moduleName}/${ACT_SET}`, payload: data }));
    setDataList(data);
  };

  return {
    fetchDataList,
    dataList,
  };
};
