import { FetchResponse, FetchWrapper, MultipartUrl, ParamsUrl } from './commonInterfaces.ts';
import { queryString } from './commonFunctions.ts';
import { DELETE, GET, MULTIPART, PATCH, POST } from './commonConstants.ts';

const fetchWrapper = async <T>({ url, method, body }: FetchWrapper): Promise<FetchResponse<T>> => {
  //const token = await checkTokenValidity();
  const token = ''; //TODO add token
  const headers = new Headers();
  method === MULTIPART
    ? headers.set('content-type', 'multipart/form-data; boundary=${form._boundary}')
    : headers.set('content-type', 'application/json;charset=UTF-8');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  const options: RequestInit = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    const responseJson = await response.json();

    return {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      type: response.type,
      url: response.url,
      data: responseJson,
    };
  } catch (error) {
    return await Promise.reject(error);
  }
};

const fetchCall = async <T>({ url, params }: ParamsUrl): Promise<FetchResponse<T>> => {
  const query = decodeURI(queryString(params));
  try {
    return await fetchWrapper({ url: `${url}${query || ''}`, method: GET });
  } catch (error: any) {
    return error;
  }
};

const postCall = async <T>({ url, params }: ParamsUrl): Promise<FetchResponse<T>> => {
  try {
    return await fetchWrapper({ url, body: params, method: POST });
  } catch (error: any) {
    return error;
  }
};

const patchCall = async <T>({ url, params }: ParamsUrl): Promise<FetchResponse<T>> => {
  try {
    return await fetchWrapper({
      url,
      body: params,
      method: PATCH,
    });
  } catch (error: any) {
    return error;
  }
};

const deleteCall = async <T>({ url }: ParamsUrl): Promise<FetchResponse<T>> => {
  try {
    return await fetchWrapper({ url, method: DELETE });
  } catch (error: any) {
    return error;
  }
};

const multipartCall = async <T>({ url, formData }: MultipartUrl): Promise<FetchResponse<T>> => {
  try {
    return await fetchWrapper({ url, body: formData, method: MULTIPART });
  } catch (error: any) {
    return error;
  }
};

export class apiClient {
  static get = fetchCall;
  static post = postCall;
  static patch = patchCall;
  static delete = deleteCall;
  static multipart = multipartCall;
}
