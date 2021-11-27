const AllData = () => {
  
  const ctx = React.useContext(UserContext);

  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1>All Data</h1>
          <table class="table">
            <thead class="table-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Balance</th>
            </tr>
            </thead>
            <tbody>
              {
                ctx.users.map(u => (
                  <tr>
                    <th>{u.name}</th>
                    <th>{u.email}</th>
                    <th><code>{u.password}</code></th>
                    <th>{u.balance}</th>
                  </tr>
                ))
              }
            </tbody>
        </table>
        </div>
      </div>
    </div>
    </>
  );
}
