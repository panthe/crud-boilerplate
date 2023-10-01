import { useAppDispatch } from '../store';
import { useState } from 'react';
import { ApiResponse, BaseRepository } from './commonClasses.ts';
import { AxiosError } from 'axios';
import { ACT_SET } from './commonConstants.ts';

interface Props<T> {
  moduleName: string;
  repository: BaseRepository<T>;
  id?: number | string;
  updateStore?: boolean;
}

interface Return<T> {
  fetchDataElement: () => void;
  dataElement?: T;
}

export const useCrud = <T>({
  moduleName,
  repository,
  updateStore = true,
  id,
}: Props<T>): Return<T> => {
  const dispatch = useAppDispatch();
  const [dataElement, setDataElement] = useState<T>();

  const fetchDataElement = () => {
    id &&
      repository
        .get(id)
        .then((response: ApiResponse<T>) => {
          response?.data && setData(response?.data);
        })
        .catch((err: AxiosError) => console.log(err.code));
  };

  const setData = async (data: T) => {
    updateStore && (await dispatch({ type: `${moduleName}/${ACT_SET}`, payload: data }));
    setDataElement(data);
  };

  return {
    fetchDataElement,
    dataElement,
  };
};
