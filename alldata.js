const AllData = () => {
  
  const context = React.useContext(UserContext);

  return (
    <>
    <div className="container-fluid">
      <div className="row">
       
          <h1>All Data</h1>
          {
                context.users.map((u, key) => (
                  <div className="col" key={`${key}-${u.name}`}>
                    <Card 
                      bgcolor="secondary"
                      txtcolor="white"
                      header={<strong>{`Name: ${u.name}`}</strong>}
                      title={`Email: ${u.email}`}
                      text={`Balance: ${u.balance}`}
                      body={<code>{`password: ${u.password}`}</code>}
                    />
                  </div>
                ))
              }

      </div>
    </div>
    </>
  );
}
