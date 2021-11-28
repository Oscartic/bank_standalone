const NavBar= ({openSession, dataSession, setOpenSession, setDataCurrentSession}) => {

  const context = React.useContext(UserContext);

  React.useEffect(() => {
    console.log("si pasa por aqui");
    currentUserSession();
  },[openSession]);
  
  const currentUserSession = () => {
    if(!openSession) return <span>Sin session</span>
    console.log(context.users)

    const data = context.users.filter(u => u.session);
    console.log(data);
    return(
      <h4>{`Bienvenido, ${data.name}`}</h4>
    );
  }

  const closeSession = () => {
    setOpenSession(false);
    setDataCurrentSession({});    
  }

  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#/CreateAccount/">Create Account</a>
            </li>
            { !openSession && (
              <li className="nav-item">
                <a className="nav-link" href="#/login/">Login</a>
              </li>
              )
            }
            { openSession && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#/deposit/">Deposit</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/withdraw/">Withdraw</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/balance/">Balance</a>
                </li>
              </> 
            ) }
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">AllData</a>
            </li>
          </ul>
        </div>
        <div className="d-flex" style={{color: '#FFF'}}>
          { openSession && (
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <strong>{dataSession.email}</strong>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#/balance/">Tu cuenta {dataSession.name}</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => closeSession()}>Salir</a></li>
              </ul>
            </div> 
            )
          }
        </div>
      </div>
    </nav>
    </>
  );
}

