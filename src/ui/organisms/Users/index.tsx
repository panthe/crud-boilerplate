import { ReactElement } from 'react';
import Grid from '../../molecules/Grid';
import UserRepository, { IUser } from '../../../dto/user.ts';
import { MN_USERS } from '../../../common/commonConstants.ts';

const Users = (): ReactElement => {
  const userRepository: UserRepository = new UserRepository(MN_USERS);

  return <Grid<IUser> moduleName={MN_USERS} repository={userRepository} updateStore={true} />;
};

export default Users;
