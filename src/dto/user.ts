import { BaseRepository } from '../common/commonClasses.ts';
import { MN_USERS } from '../common/commonConstants.ts';
import { BaseModel, CrudID } from '../common/commonInterfaces.ts';

export interface IUser extends BaseModel {
  name?: string;
  username?: string;
  email?: string;
}

class UserRepository extends BaseRepository<IUser> {
  collection = MN_USERS;

  getMany() {
    return super.getMany();
  }

  get(id: CrudID) {
    return super.get(id);
  }

  create(data: IUser) {
    return super.create(data);
  }

  update(id: CrudID, data: IUser) {
    return super.update(id, data);
  }

  delete(id: CrudID) {
    return super.delete(id);
  }
}

export default UserRepository;
