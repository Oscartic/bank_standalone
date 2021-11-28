const Withdraw= ({dataSession,  setDataCurrentSession}) => {
  const [withdraw, setWithdraw] = React.useState(0);

  const context = React.useContext(UserContext);

  const handleDeposit = (e) => {
    e.preventDefault();
    if(isNaN(withdraw)) return alert('The value is not a number!');
    if(withdraw > parseInt(dataSession.balance)) return alert('The amount cannot be greater than your current balance!');    
    const withdrawValue = parseInt(dataSession.balance) -  parseInt(withdraw);
    setDataCurrentSession({...dataSession, balance: withdrawValue});
    console.log("desde withdraw", context);
    const user = context.users.forEach(user => {
      if(user.email === dataSession.email && user.password === dataSession.password) { 
        user.balance = withdrawValue;
        console.log(user.balance);
      }
      console.log(context.users)
    });
  }

  const enableField = () => {
    if(withdraw <= 0) return true;
    return false;
  }

  console.log(dataSession)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div style={{ maxWidth:'450px', margin: 'auto', padding:'1em'}}>
            <h1>Withdraw</h1>
            <Card 
              bgcolor="secondary"
              txtcolor="white"
              header="BadBank - Withdraw"
              title={`Current Balance: ${dataSession.balance}`}
              body={
                <form>
                <div className="mb-3">
                  <label htmlFor="inputDeposit" className="form-label">Enter amount to Withdraw: </label>
                  <input 
                    className="form-control" 
                    id="inputDeposit" 
                    aria-describedby="depositHelp" 
                    onChange={(e) => setWithdraw(e.target.value)} 
                    value={withdraw}
                  />
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-outline-danger" 
                    onClick={(e) => handleDeposit(e)}
                    disabled={enableField()}
                  >
                    Withdraw
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
