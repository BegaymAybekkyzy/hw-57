import { useState } from "react";
import UserForm from "./components/userForm/userForm.tsx";
import { User } from "./types";
import Users from "./components/Users/Users.tsx";
import "./App.css";

const App = () => {
  const [userList, setUserList] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUserList((prevState) => [...prevState, newUser]);
  };

  return (
    <>
      <div className="container  ">
        <div className="pt-5 row row-cols-2">
          <div className="">
            <UserForm onSubmitForm={addUser} />
          </div>

          <div>
            {userList.length > 0 ? (
              <Users userList={userList} />
            ) : (
              <div className="d-flex h-100 justify-content-center align-items-center">
                <p>User list is empty</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
