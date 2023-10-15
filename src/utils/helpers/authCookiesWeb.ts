import Cookies from 'js-cookie';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../common/commonConstants.ts';

export async function removeTokenCookies(): Promise<void> {
  await Cookies.remove(ACCESS_TOKEN);
  await Cookies.remove(REFRESH_TOKEN);
}

export async function addTokenCookies({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}): Promise<void> {
  await Cookies.set(ACCESS_TOKEN, accessToken);
  await Cookies.set(REFRESH_TOKEN, refreshToken);
}

export async function getTokenCookies(): Promise<{
  accessToken?: string;
  refreshToken?: string;
}> {
  const accessToken = await Cookies.get(ACCESS_TOKEN);
  const refreshToken = await Cookies.get(REFRESH_TOKEN);

  return {
    accessToken,
    refreshToken,
  };
}
