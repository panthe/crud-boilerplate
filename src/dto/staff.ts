import { BaseRepository } from '../common/commonClasses.ts';
import { IBaseModel, IListFetchParams } from '../common/commonInterfaces.ts';
import { MODULE } from '../common/commonTypes.ts';

export interface IStaff extends IBaseModel {
  name?: string;
  description?: string;
  address?: string;
  phone?: string;
  duration?: number;
  onlineBooking?: boolean;
  email?: string;
  emailNotification?: boolean;
  color?: string;
  deactivated?: boolean;
  note?: string;
  reservedNote?: string;
}

class StaffRepository extends BaseRepository<IStaff, IListFetchParams> {
  constructor(moduleName: MODULE) {
    super(moduleName);
    this.gridFieldsOptions = [
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
        linkedField: 'email',
        type: '',
        align: 'left',
        width: 'max-content',
        sortable: true,
        formatType: undefined,
      },
    ];
  }
}

export default StaffRepository;
