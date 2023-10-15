// CONSTANTS
export const ACCESS_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';

// TYPE
export const TYPE_LIST = 'LIST';
export const TYPE_ELEMENT = 'ELEMENT';

// MODULE
export const MN_USERS = 'USERS';
export const MN_STAFF = 'STAFF';

// ACTIONS
export const ACT_SET = 'SET';

// URL
export const BASE_URL = 'http://localhost:9000/api/v1';
//export const BASE_URL = 'https://jsonplaceholder.typicode.com/';
export const API = '/api';
export const V1 = '/v1';
export const ME = '/me';
export const AUTH = '/auth';
export const LOGIN = '/login';
export const HOME = '/home';
export const STAFF = '/staff';
export const USERS_URL = '/users';

// DATE
export const DATE_FORMAT = {
  YYYY_MM_DD: 'YYYY-MM-DD',
  YYYY_MM_DD_HH_MM: 'YYYY-MM-DD HH:mm',
  YYYY_MM_DDTHH_MM: 'YYYY-MM-DDTHH:mm',
  YYYY: 'YYYY',
  DD_MM_YYYY: 'DD/MM/YYYY',
  DD_MM_YYYY_HH_MM: 'DD/MM/YYYY HH:mm',
  DD_MM_YYYY_HH_MM_SS: 'DD/MM/YYYY HH:mm:ss',
  DD_MM_YYYY__HH_MM: 'DD-MM-YYYY\xa0\xa0HH:mm:ss',
  DD_MM_YYYY_WITH_MINUS: 'DD-MM-YYYY',
  DD_MMMM_YYYY: 'DD MMMM YYYY',
  MMMM_YYYY: 'MMMM YYYY',
  HH_MM: 'HH:mm',
};

// API METHODS
export const GET = 'GET';
export const POST = 'POST';
export const PATCH = 'PATCH';
export const DELETE = 'DELETE';
export const MULTIPART = 'MULTIPART';

// REGEX
export const PHONE_REGEX = /^\+(?:[0-9] ?){6,14}[0-9]$/;
