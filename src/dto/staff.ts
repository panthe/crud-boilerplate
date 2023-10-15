import { BaseRepository } from '../common/commonClasses.ts';
import { IBaseModel, IListFetchParams } from '../common/commonInterfaces.ts';
import { MODULE } from '../common/commonTypes.ts';
import * as z from 'zod';
import { PHONE_REGEX } from '../common/commonConstants.ts';

export interface IStaff extends IBaseModel {
  tenantId?: string;
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
        formatType: 'number',
      },
      {
        visible: true,
        position: 1,
        linkedField: 'name',
        type: '',
        align: 'left',
        width: 'max-content',
        sortable: true,
        formatType: 'string',
      },
      {
        visible: true,
        position: 2,
        linkedField: 'email',
        type: '',
        align: 'left',
        width: 'max-content',
        sortable: true,
        formatType: 'string',
      },
    ];

    this.formFieldsOptions = [
      {
        visible: true,
        position: 0,
        readonly: true,
        linkedField: 'id',
        type: 'number',
        width: '150px',
        formatType: 'number',
      },
      {
        visible: false,
        position: 0,
        readonly: true,
        linkedField: 'tenantId',
        type: 'string',
        width: '150px',
        formatType: 'string',
      },
      {
        visible: true,
        position: 1,
        readonly: false,
        linkedField: 'name',
        type: 'string',
        width: '150px',
        formatType: 'string',
      },
    ];

    this.formValidationSchema = z.object({
      name: z
        .string({
          required_error: 'Field Mandatory',
        })
        .min(2, { message: 'Field min 2' })
        .max(30, { message: 'Field max 30' }),
      email: z
        .string()
        .email({
          message: 'Email invalid',
        })
        .optional()
        .nullable()
        .or(z.literal('')),
      phone: z
        .string()
        .optional()
        .nullable()
        .or(z.string().regex(PHONE_REGEX, { message: 'Invalid Phone' })),
    });
  }
}

export default StaffRepository;
