import { User } from "../../../types";
import * as React from "react";

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <div className="card p-3 mb-3">
      <h3>{user.name}</h3>
      <div className="row">
        <p className="col-6">
          <span className="fw-bold"> Email:</span> {user.email}
        </p>
        <p className="col-3">
          <span className="fw-bold"> Active:</span>{" "}
          {user.active ? "active" : "inactive"}
        </p>
        <p className="col-3">
          <span className="fw-bold"> Role:</span> {user.role}
        </p>
      </div>
    </div>
  );
};

export default UserItem;
