// import { useState } from "react";

import "./App.css";
import UserForm from './components/userForm/userForm.tsx';
import UserItem from './components/UserItem/UserItem.tsx';

const App = () => {


  return (
    <>
      <div className="container pt-5 row row-cols-2">
        <div>
          <UserForm/>
        </div>

        <div>
          <UserItem/>
        </div>
      </div>

    </>
  );
};

export default App;
