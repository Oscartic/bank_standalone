const Spa = () => {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider 
        value={{ users: [{name: 'Oscar', email: 'oscartic@mail.com', password: 'secret', balance:100}]}}
      >
          <Routes>        
            <Route path="/" exact element={<Home />} />
            <Route path="/CreateAccount/" element={<CreateAccount />} />
            <Route path="/login/" element={<Login />} />
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
