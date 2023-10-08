import { createAction } from '@reduxjs/toolkit';
import { IUser } from '../../../../dto/user.ts';
import { ACT_SET, TYPE_LIST, MN_USERS } from '../../../../common/commonConstants.ts';

export const setUsers = createAction<IUser[]>(`${MN_USERS}/${TYPE_LIST}/${ACT_SET}`);
