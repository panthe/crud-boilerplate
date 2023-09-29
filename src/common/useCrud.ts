import { useAppDispatch } from '../store';
import { useEffect } from 'react';
import { ApiResponse, BaseRepository } from './commonClasses.ts';
import { AxiosError } from 'axios';

interface Props<T> {
  moduleName: string;
  repository: BaseRepository<T>;
}

interface Return {
  fetchDataList: () => void;
}

export const useCrud = <T>({ moduleName, repository }: Props<T>): Return => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchDataList();
  }, []);

  const fetchDataList = () => {
    repository
      .getMany()
      .then((response: ApiResponse<T[]>) => {
        response?.data && setData(response?.data);
      })
      .catch((err: AxiosError) => console.log(err.code));
  };

  const setData = async (data: T[]) => {
    await dispatch({ type: `${moduleName}/set`, payload: data });
  };

  return {
    fetchDataList,
  };
};
