import { User, UserMutation } from "../../types";
import * as React from "react";
import { useState } from "react";

interface Props {
  onSubmitForm: (newUser: User) => void;
}

const UserForm: React.FC<Props> = ({ onSubmitForm }) => {
  const [form, setForm] = useState<UserMutation>({
    name: "",
    email: "",
    role: "",
    active: false,
  });

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { value, name } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: checked }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitForm({ id: String(new Date().toISOString()), ...form });
  };

  return (
    <form className="form-control" onSubmit={onSubmit}>
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input
        type="text"
        name="name"
        className="form-control mb-3"
        id="userName"
        value={form.name}
        placeholder="User name"
        onChange={inputChangeHandler}
        required={true}
      />

      <label htmlFor="'email" className="form-label">
        Email address
      </label>
      <input
        type="text"
        name="email"
        className="form-control mb-3"
        id="userEmail"
        value={form.email}
        placeholder="email"
        onChange={inputChangeHandler}
        required={true}
      />

      <div>
        <label htmlFor="role" className="form-label me-2">
          User role
        </label>
        <select
          id="role"
          className="me-4"
          name="role"
          value={form.role}
          onChange={inputChangeHandler}
          required={true}
        >
          <option value="" disabled={true}>
            Select role
          </option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
        </select>

        <label htmlFor="active" className="form-check-label me-2">
          User active
        </label>
        <input
          type="checkbox"
          id="active"
          className="form-check-input"
          checked={form.active}
          name="active"
          onChange={checkboxChangeHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
