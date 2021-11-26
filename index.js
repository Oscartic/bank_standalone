const Spa = () => {
  return (
    <HashRouter>
      <NavBar/>
      <Routes>        
      <Route path="/" exact element={<Home />} />
      <Route path="/CreateAccount/" element={<CreateAccount />} />
      <Route path="/login/" element={<Login />} />
      <Route path="/deposit/" element={<Deposit />} />
      <Route path="/withdraw/" element={<Withdraw />} />
      <Route path="/balance/" element={<Balance />} />
      <Route path="/alldata/" element={<AllData />} />
      </Routes>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
