const Login = ({openSession, dataSession, setOpenSession, setDataCurrentSession}) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus] = React.useState('');

  const context = React.useContext(UserContext);
  
  const validate = (field, label) => {
    if(!field) {
        setStatus(`Error: ${label}`);
        setTimeout(() => setStatus(''), 3000);
        return alert(`The field ${label} cannot be empty!`);;
    }
    return true;  
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    if(!validate(email, 'email')) return;
    if(!validate(password, 'password')) return;
    await setSession({email, password});
}

const setSession = async ({email, password}) => {
  // const user = await context.users.filter(e => {
  //   if(e.email === email && e.password === password) { 
  //     e.session = true;
  //     context.onSession = true;
  // }});
  const user = await context.users.filter(e => e.email === email && e.password === password);
  if(user.length <= 0) return alert("The user with this email and password combination cannot be found!");
  setDataCurrentSession(user[0])
  setOpenSession(true);
  const result = user.length > 0 ? true : false;
  return result; 
}

  return (
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <div style={{ maxWidth:'450px', margin: 'auto', padding:'1em'}}>
          { !openSession ? (
            <>
              <h1>Login</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                  />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                  />
                </div>
                  <button type="submit" className="btn btn-outline-danger" onClick={handleLogin}>Ingresar</button>
              </form>
            </>
          ) : (
            <>
              <h1>Welcome {dataSession.name}!</h1>
              <Balance dataSession={dataSession} />
            </>
          ) }
          
      
      </div>
    </div>
  </div>
</div>
  )  
}
