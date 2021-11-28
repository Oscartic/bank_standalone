const Home= () => {

  const ctx = React.useContext(UserContext);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div style={{ maxWidth:'450px', margin: 'auto', padding:'1em'}}>
            <h1>Home</h1>
              <Card 
                bgcolor="secondary"
                txtcolor="white"
                header="BadBank landing Page"
                title="Welcome to the Bank"
                text="You can use this bank"
                body={(<img src="https://ik.imagekit.io/orb/bank_bl8qVd2IE.png?updatedAt=1637803496240" className="img-fluid" alt="responsive image" />)}
              />
          </div>
        </div>
      </div>
    </div>
  );  
}
