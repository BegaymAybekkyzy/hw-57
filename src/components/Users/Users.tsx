import React from 'react';
import { User } from '../../types';
import UserItem from './UserItem/UserItem.tsx';

interface Props {
  userList: User[];
}

const Users: React.FC<Props> = ({userList}) => {
  return (
    <>
      {userList.map((user:User) => (
        <UserItem key={user.id} user={user} />
      ))}
    </>
  );
};

export default Users;