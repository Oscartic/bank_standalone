const Balance = ({dataSession}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div style={{ maxWidth:'350px', margin: 'auto', padding:'1em'}}>
            <h1>Balance</h1>
            <Card 
              bgcolor="secondary"
              txtcolor="white"
              header={`BadBank - Balance account ${dataSession.email}`}
              title={`Your Info, ${dataSession.name}`}
              text={`Balance: ${dataSession.balance}`}
              body={(<img src="https://ik.imagekit.io/orb/user_aEBQqkL01.png?updatedAt=1638121208266" className="img-fluid" alt="responsive image" />)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
