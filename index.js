function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              id: 1,
              name: "Abel",
              email: "abel@mit.edu",
              password: "123passwd",
              balance: 100,
            },
          ],
        }}
      >
        <div className="container" style={{ padding: "100px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/createaccount/" component={CreateAccount} />
          <Route path="/loginform/" component={LoginForm} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
