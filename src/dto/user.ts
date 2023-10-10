import { BaseRepository } from '../common/commonClasses.ts';
import { IBaseModel } from '../common/commonInterfaces.ts';
import { MODULE } from '../common/commonTypes.ts';

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
        type: '',
        align: 'left',
        width: 'max-content',
        sortable: true,
        formatType: undefined,
      },
      {
        visible: true,
        position: 1,
        linkedField: 'name',
        type: '',
        align: 'left',
        width: 'max-content',
        sortable: true,
        formatType: undefined,
      },
      {
        visible: true,
        position: 2,
        linkedField: 'address.street',
        type: '',
        align: 'left',
        width: 'max-content',
        sortable: true,
        formatType: undefined,
      },
      {
        visible: true,
        position: 3,
        linkedField: 'address.zipcode',
        type: '',
        align: 'left',
        width: 'max-content',
        sortable: true,
        formatType: undefined,
      },
    ];
  }
}

export default UserRepository;
