import { ReactElement } from 'react';
import Grid from '../../molecules/Grid';
import UserRepository, { IUser } from '../../../dto/user.ts';
import { MN_USER, MN_USERS } from '../../../common/commonConstants.ts';

const Users = (): ReactElement => {
  const userRepository: UserRepository = new UserRepository();

  return (
    <Grid<IUser>
      moduleNameList={MN_USERS}
      moduleNameElement={MN_USER}
      repository={userRepository}
      updateStore={true}
    />
  );
};

export default Users;
