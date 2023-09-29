import './App.css';
import UserRepository, { IUser } from './dto/user.ts';
import { useSelector } from 'react-redux';
import { getUsersData } from './store';
import { useCrud } from './common/useCrud.ts';

function App() {
  const userRepository: UserRepository = new UserRepository();
  useCrud<IUser>({ moduleName: 'user', repository: userRepository });
  const users = useSelector(getUsersData);

  return (
    <div>
      <h2>Users</h2>
      <ul>{users?.map((user, idx) => <li key={idx}>{user.username}</li>)}</ul>
    </div>
  );
}

export default App;
