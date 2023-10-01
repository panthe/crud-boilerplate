import { useAppDispatch } from '../store';
import { useState } from 'react';
import { ApiResponse, BaseRepository } from './commonClasses.ts';
import { AxiosError } from 'axios';
import { ACT_SET } from './commonConstants.ts';
import { useForm, UseFormReturn } from 'react-hook-form';
import { BaseModel, CrudID } from './commonInterfaces.ts';

interface Props<T extends BaseModel> {
  moduleName: string;
  repository: BaseRepository<T>;
  id: CrudID;
  updateStore?: boolean;
}

interface Return<T extends BaseModel> {
  fetchDataElement: () => void;
  methods: UseFormReturn<T>;
  dataElement?: T;
}

export const useCrud = <T extends BaseModel>({
  moduleName,
  repository,
  updateStore = true,
  id,
}: Props<T>): Return<T> => {
  const dispatch = useAppDispatch();
  const [dataElement, setDataElement] = useState<T>();

  const methods = useForm<T>({
    mode: 'onSubmit',
    values: dataElement,
  });

  const fetchDataElement = () => {
    id &&
      repository
        .get(id)
        .then((response: ApiResponse<T>) => {
          console.log('fetchDataElement', response?.data);
          response?.data && setData(response?.data);
        })
        .catch((err: AxiosError) => console.log(err.code));
  };

  const setData = async (data: T) => {
    console.log('setData', `${moduleName}/${ACT_SET}`);
    updateStore && (await dispatch({ type: `${moduleName}/${ACT_SET}`, payload: data }));
    setDataElement(data);
  };

  return {
    fetchDataElement,
    dataElement,
    methods,
  };
};
