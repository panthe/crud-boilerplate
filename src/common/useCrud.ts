import { useAppDispatch } from '../store';
import { useState } from 'react';
import { ApiResponse, BaseRepository } from './commonClasses.ts';
import { AxiosError } from 'axios';
import { ACT_SET, MODULE, TYPE_ELEMENT } from './commonConstants.ts';
import { useForm, UseFormReturn } from 'react-hook-form';
import { IBaseModel, CrudID } from './commonInterfaces.ts';

interface Props<T extends IBaseModel> {
  moduleName: MODULE;
  repository: BaseRepository<T>;
  id: CrudID;
  updateStore?: boolean;
}

interface Return<T extends IBaseModel> {
  fetchDataElement: () => void;
  methods: UseFormReturn<T>;
  dataElement?: T;
}

export const useCrud = <T extends IBaseModel>({
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
    defaultValues: dataElement ? JSON.parse(JSON.stringify(dataElement)) : undefined,
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
    updateStore &&
      (await dispatch({ type: `${moduleName}/${TYPE_ELEMENT}/${ACT_SET}`, payload: data }));
    setDataElement(data);
  };

  return {
    fetchDataElement,
    dataElement,
    methods,
  };
};
