import { BaseRepository } from '../common/commonClasses.ts';
import { BaseModel } from '../common/commonInterfaces.ts';

export interface IUser extends BaseModel {
  name?: string;
  username?: string;
  email?: string;
}

class UserRepository extends BaseRepository<IUser> {}

export default UserRepository;
