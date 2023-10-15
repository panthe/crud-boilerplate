import { ReactElement } from 'react';
import Grid from '../../molecules/Grid';
import { MN_STAFF } from '../../../common/commonConstants.ts';
import StaffRepository, { IStaff } from '../../../dto/staff.ts';

const Staff = (): ReactElement => {
  const staffRepository: StaffRepository = new StaffRepository(MN_STAFF);

  return <Grid<IStaff> moduleName={MN_STAFF} repository={staffRepository} updateStore={true} />;
};

export default Staff;
