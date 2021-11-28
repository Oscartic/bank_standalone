const Spa = () => {

  const [openSession, setOpenSession] = React.useState(false);
  const [dataSession, setDataCurrentSession] = React.useState({});

  return (
    <HashRouter>
      <UserContext.Provider 
        value={{ onSession: false, users: [{name: 'Oscar', email: 'oscartic@mail.com', password: 'secret', balance:100, session: false}]}}
        >
        <NavBar 
          openSession={openSession} 
          dataSession={dataSession} 
          setOpenSession={setOpenSession}
          setDataCurrentSession={setDataCurrentSession} 
        />
          <Routes>        
            <Route path="/" exact element={<Home />} />
            <Route path="/CreateAccount/" element={<CreateAccount />} />
            <Route path="/login/" element={<Login openSession={openSession} dataSession={dataSession} setOpenSession={setOpenSession} setDataCurrentSession={setDataCurrentSession} />} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            <Route path="/balance/" element={<Balance />} />
            <Route path="/alldata/" element={<AllData />} />
          </Routes>
        </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
