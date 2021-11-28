const Deposit= ({dataSession,  setDataCurrentSession}) => {

  const [deposit, setDeposit] = React.useState(0);
  
  const context = React.useContext(UserContext);

  const handleDeposit = (e) => {
    e.preventDefault();
    if(isNaN(deposit)) return alert('The value is not a number!');
    if(deposit <= 0) return alert('the value must be a positive number!');
    const depositValue = parseInt(dataSession.balance) +  parseInt(deposit);
    setDataCurrentSession({...dataSession, balance: depositValue});
    console.log("desde deposit", context);
    const user = context.users.forEach(user => {
      if(user.email === dataSession.email && user.password === dataSession.password) { 
        console.log("pasa por el each");
        user.balance = depositValue;
        console.log(user.balance);
      }
      setDeposit(0);
    });
  }

  const enableField = () => {
    if(deposit === 0) return true;
    return false;
  }

  console.log(dataSession)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div style={{ maxWidth:'450px', margin: 'auto', padding:'1em'}}>
            <h1>Deposit</h1>
            <Card 
              bgcolor="secondary"
              txtcolor="white"
              header="BadBank - Deposit"
              title={`Current Balance: ${dataSession.balance}`}
              body={
                <form>
                <div className="mb-3">
                  <label htmlFor="inputDeposit" className="form-label">Enter amount to deposit: </label>
                  <input 
                    className="form-control" 
                    id="inputDeposit" 
                    aria-describedby="depositHelp" 
                    onChange={(e) => setDeposit(e.target.value)} 
                    value={deposit}
                  />
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-outline-danger" 
                    onClick={(e) => handleDeposit(e)}
                    disabled={enableField()}
                  >
                    Deposit
                  </button>
              </form>
              }
            />  
          </div>
        </div>
      </div>
    </div>
  )
}
