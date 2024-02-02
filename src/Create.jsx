function Create() {
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="form-control" placeholder="Eg. Natnael Badigo" autoComplete="hidden"/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" className="form-control" placeholder="Eg. natibadigo@gmail.com" autoComplete="hidden"/>
          </div><br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
