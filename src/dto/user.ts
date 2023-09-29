import { BaseRepository } from '../common/commonClasses.ts';

export interface IUser {
  id: string | number;
  name?: string;
  username?: string;
  email?: string;
}

class UserRepository extends BaseRepository<IUser> {
  collection = 'users';

  getMany() {
    return super.getMany();
  }

  get(id: string | number) {
    return super.get(id);
  }

  create(data: IUser) {
    return super.create(data);
  }

  update(id: string | number, data: IUser) {
    return super.update(id, data);
  }

  delete(id: string | number) {
    return super.delete(id);
  }
}

export default UserRepository;
