import { createAction } from '@reduxjs/toolkit';
import { IUser } from '../../../../dto/user.ts';
import { ACT_SET, MN_USERS, TYPE_ELEMENT } from '../../../../common/commonConstants.ts';

export const setUser = createAction<IUser>(`${MN_USERS}/${TYPE_ELEMENT}/${ACT_SET}`);
