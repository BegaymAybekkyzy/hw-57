

const UserForm = () => {
  return (
    <form className="form-control">
      <label htmlFor="userName" className="form-label">Name</label>
      <input
        type="text"
        name="userName"
        className="form-control mb-3"
        id="userName"
        placeholder="User name"
      />

      <label htmlFor="'userEmail" className="form-label">Email address</label>
      <input
        type="text"
        name="userEmail"
        className="form-control mb-3"
        id="userEmail"
        placeholder="email"
      />

      <div>
        <label htmlFor="userRole" className="form-label me-2">User role</label>
        <select id="userRole" className="me-4" name='userRole'>
          <option>User</option>
          <option>Admin</option>
          <option>Editor</option>
        </select>

        <label htmlFor="userActive" className="form-check-label me-2">User active</label>
        <input
          type="checkbox"
          id="userActive"
          className="form-check-input"
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default UserForm;