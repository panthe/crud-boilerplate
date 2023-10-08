import { BaseRepository } from '../common/commonClasses.ts';
import { IBaseModel } from '../common/commonInterfaces.ts';

export interface IUser extends IBaseModel {
  name?: string;
  username?: string;
  email?: string;
  address?: IAddress;
  phone?: string;
  website?: string;
  company?: string;
}

interface IAddress {
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
  geo?: IGeo;
}

interface IGeo {
  lat?: string;
  lng?: string;
}

class UserRepository extends BaseRepository<IUser> {}

export default UserRepository;
