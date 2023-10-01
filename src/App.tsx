import './App.css';
import UserRepository, { IUser } from './dto/user.ts';
import { useList } from './common/useList.ts';
import { MN_USERS } from './common/commonConstants.ts';
import { useEffect } from 'react';

function App() {
  const userRepository: UserRepository = new UserRepository();
  const { fetchDataList, dataList } = useList<IUser>({
    moduleName: MN_USERS,
    repository: userRepository,
  });

  useEffect(() => {
    fetchDataList();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>{dataList?.map((user, idx) => <li key={idx}>{user.username}</li>)}</ul>
    </div>
  );
}

export default App;
