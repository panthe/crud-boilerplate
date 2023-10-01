import { createAction } from '@reduxjs/toolkit';
import { IUser } from '../../../../dto/user.ts';
import { ACT_SET, MN_USER } from '../../../../common/commonConstants.ts';

export const setUser = createAction<IUser>(`${MN_USER}/${ACT_SET}`);
