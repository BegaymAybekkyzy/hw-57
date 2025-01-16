

const UserItem = () => {
  return (

    <div className="card p-3">
      <h3>Name</h3>
      <div className='row'>
        <p className='col-6'>
          <span className='fw-bold'> Email:</span> user24325@gmail.com
        </p>
        <p className="col-3">
          <span className="fw-bold"> Active:</span> Yes
        </p>
        <p className="col-3">
          <span className="fw-bold"> Role:</span> Admin
        </p>
      </div>
    </div>
  );
};

export default UserItem;