const Deposit= ({dataSession,  setDataCurrentSession}) => {

  const [deposit, setDeposit] = React.useState(0);
  
  const context = React.useContext(UserContext);

  const handleDeposit = (e) => {
    e.preventDefault();
    if(deposit <= 0) return alert('The amount cannot be less than 0!');
    const depositValue = parseInt(dataSession.balance) +  parseInt(deposit);
    setDataCurrentSession({...dataSession, balance: depositValue});
    console.log("desde deposit", context);
    const user = context.users.forEach(user => {
      if(user.email === dataSession.email && user.password === dataSession.password) { 
        console.log("pasa por el each");
        user.balance = depositValue;
        console.log(user.balance);
      }
      console.log(context.users)
    });

  }

  console.log(dataSession)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h1>Deposit</h1>
          <div style={{ maxWidth:'450px', margin: 'auto', padding:'1em'}}>
            <form>
              <div className="mb-3">
              <div id="emailHelp" className="form-text">Balance: {dataSession.balance}</div>
                <label htmlFor="inputDeposit" className="form-label">Enter amount to deposit: </label>
                <input 
                  type="number" 
                  className="form-control" 
                  id="inputDeposit" 
                  aria-describedby="depositHelp" 
                  onChange={(e) => setDeposit(e.target.value)} 
                  value={deposit}
                />
                </div>
                <button type="submit" className="btn btn-outline-danger" onClick={(e) => handleDeposit(e)}>Deposit</button>
            </form>
            </div>
        </div>
      </div>
    </div>
  )
}
