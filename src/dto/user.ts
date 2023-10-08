import { BaseRepository } from '../common/commonClasses.ts';
import { IBaseModel } from '../common/commonInterfaces.ts';
import { MODULE } from '../common/commonConstants.ts';

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

class UserRepository extends BaseRepository<IUser> {
  constructor(moduleName: MODULE) {
    super(moduleName);
    this.gridColumnOptions = [
      {
        visible: true,
        position: 0,
        linkedField: 'id',
        type: 'ID',
        align: 'left',
        width: '10rem',
        sortable: true,
      },
      {
        visible: true,
        position: 1,
        linkedField: 'name',
        type: 'NAME',
        align: 'left',
        width: '10rem',
        sortable: true,
      },
      {
        visible: true,
        position: 1,
        linkedField: 'address.street',
        type: 'STREET',
        align: 'left',
        width: '10rem',
        sortable: true,
      },
    ];
  }
}

export default UserRepository;
