import { IKeyValue, IQueryString } from './commonInterfaces.ts';
import { JsonKeyValue } from './commonTypes.ts';

export const queryString = (params: IQueryString = {}): string => {
  // get array of key value pairs ([[k1, v1], [k2, v2]])
  const qs = Object.entries(params)
    // filter pairs with undefined value and empty arrays
    .filter(
      (pair): boolean => pair[1] !== undefined && (!Array.isArray(pair[1]) || pair[1]?.length > 0)
    )
    // encode keys and values, remove the value if it is null, but leave the key
    .map((pair): string => {
      if (Array.isArray(pair[1])) {
        return pair[1]
          .filter((i): boolean => i !== null)
          .map((el: string | number | boolean | IKeyValue) => {
            if (typeof el !== 'object') {
              return `${pair[0]}=`.concat(encodeURIComponent(el).trim());
            }
            return `${pair[0]}=`.concat(
              encodeURIComponent(el.id as string | number | boolean).trim()
            );
          })
          .join('&');
      }
      return (
        pair
          .filter((i): boolean => i !== null)
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          .map((el: string | number | boolean | IKeyValue) => {
            if (typeof el !== 'object') {
              return encodeURIComponent(el).trim();
            }
            return encodeURIComponent(el.id as string | number | boolean).trim();
          })
          .join('=')
      );
    })
    .join('&');
  return qs && `?${qs}`;
};

export const findNestedProp = (
  obj: JsonKeyValue,
  key: string,
  defaultValue?: string | number | boolean | null
): string | number | boolean | null | JsonKeyValue => {
  if (typeof defaultValue === 'undefined') defaultValue = null;
  const propSplit = key.split('.');
  for (let i = 0; i < propSplit.length; i++) {
    if (typeof obj[propSplit[i]] === 'undefined') return defaultValue;
    obj = obj[propSplit[i]];
  }
  return obj;
};
