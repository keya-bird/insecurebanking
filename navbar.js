function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src="moneybag.png" alt="" width="30" height="24" />
          Insecure Bank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="bank-item nav-item px-2">
              <a className="nav-link" href="#/CreateAccount/">
                <span className="tooltip">
                  <span></span>Create an account
                </span>
                Create Account
              </a>
            </li>
            <li className="bank-item nav-item px-2">
              <a className="nav-link" href="#/loginform/">
                <span className="tooltip">
                  <span></span>Login <br /> 
                  Page
                </span>
                Login
              </a>
            </li>
            <li className="bank-item nav-item px-2">
              <a className="nav-link" href="#/deposit/">
                <span className="tooltip">
                  <span></span>Deposit an amount
                </span>
                Deposit
              </a>
            </li>
            <li className="bank-item nav-item px-2">
              <a className="nav-link" href="#/withdraw/">
                <span className="tooltip">
                  <span></span>Withdraw amount
                </span>
                Withdraw
              </a>
            </li>
            <li className="bank-item nav-item px-2">
              <a className="nav-link" href="#/alldata/">
                <span className="tooltip">
                  <span></span>Summary of all users
                </span>
                All Data
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
