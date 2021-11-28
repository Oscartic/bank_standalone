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
              <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>
              {
                ctx.users.map((u, key) => (
                  <tr key={`${key}-${u.name}`}>
                    <th>{u.name}</th>
                    <td>{u.email}</td>
                    <td><code>{u.password}</code></td>
                    <td>{u.balance}</td>
                    <td><span className="status-session">{JSON.stringify(u.session)}</span></td>
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
