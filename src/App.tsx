import { useState } from 'react';
import UserForm from './components/userForm/userForm.tsx';
import { User } from './types';
import Users from './components/Users/Users.tsx';
import './App.css';


const App = () => {
  const [userList, setUserList] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUserList(prevState => [...prevState, newUser]);
  };

  return (
    <>
      <div className="container pt-5 row row-cols-2">
        <div>
          <UserForm onSubmitForm={addUser} />
        </div>

        <div>
          <Users userList={userList} />
        </div>
      </div>

    </>
  );
};

export default App;
