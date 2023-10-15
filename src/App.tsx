import './App.css';
import Users from './ui/organisms/Users';
import Login from './ui/organisms/Login';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Login />
      <Users />
    </div>
  );
}

export default App;
