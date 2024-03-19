const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

let currentUserIndex = 0;
function assignUserID(userID) {
  currentUserIndex = userID - 1;
  return currentUserIndex;
}

function Card(props) {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [deposit, setDeposit] = React.useState("");
  const [withdraw, setWithdraw] = React.useState("");
  const ctx = React.useContext(UserContext);
  let users = [...ctx.users];

  let balance = users[currentUserIndex].balance;
  let userName = users[currentUserIndex].name;
  console.log(`Balance of ${userName} is ${balance}`);

  function validate(field, label) {
    const errorMessage = !field ? `Error: Enter ${label}` : "";
    setStatus(errorMessage);

    if (errorMessage) {
      alert(errorMessage);
      return false;
    }

    if ([deposit, withdraw].includes(field) && field <= 0) {
      alert("Invalid input, positive numbers only");
      return false;
    }

    if ([deposit, withdraw].includes(field) && !field.match(/^\d+$/)) {
      alert("Please enter numbers only!");
      return false;
    }

    return true;
  }

  function validateDeposit() {
    return deposit.length && name.length;
  }

  function validateWithdraw() {
    return withdraw.length && name.length;
  }

  function clearForm() {
    setDeposit("");
    setWithdraw("");
    setShow(true);
  }

  function handleDeposit() {
    if (!validate(name, "name") || !validate(deposit, "deposit")) return;

    if (name === users[currentUserIndex].name) {
      console.log(name, `Deposit amount: ${deposit}`);
      users[currentUserIndex].balance += Number(deposit);
      setShow(false);
    } else {
      alert("Incorrect Name");
      clearForm();
      setShow(true);
    }
  }

  function handleWithdraw() {
    if (!validate(name, "name") || !validate(withdraw, "withdraw")) return;

    if (name === users[currentUserIndex].name) {
      if (Number(withdraw) <= balance) {
        console.log(name, `Withdrawl amount: ${withdraw}`);
        users[currentUserIndex].balance -= Number(withdraw);
        setShow(false);
      } else {
        alert("Insufficient Funds. Please enter a lower amount.");
        clearForm();
      }
    } else {
      alert("Incorrect Name");
      clearForm();
      setShow(true);
    }
  }

  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card text-white bg-dark mb-3" + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "50rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
        {props.deposit && show ? (
          <>
            Balance for {userName}'s Account {balance} <br />
            <br />
            Account Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Deposit Amount
            <br />
            <input
              type="text"
              className="form-control"
              id="withdraw"
              placeholder="Enter Deposit Amount"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              disabled={!validateDeposit()}
              className="btn btn-light"
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </>
        ) : (
          props.submitButtonDeposit && (
            <>
              <div class="alert alert-success" role="alert">
                <h5>Deposit Successful</h5>
              </div>
              <button
                type="submit"
                className="btn btn-warning"
                onClick={clearForm}
              >
                Make another Deposit
              </button>
            </>
          )
        )}
        {props.withdraw && show ? (
          <>
            Balance for {userName}'s Account {balance} <br />
            <br />
            Account Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Withdrawl Amount
            <br />
            <input
              type="text"
              className="form-control"
              id="withdraw"
              placeholder="Enter Withdrawl Amount"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              disabled={!validateWithdraw()}
              className="btn btn-light"
              onClick={handleWithdraw}
            >
              Withdrawl
            </button>
          </>
        ) : (
          props.submitButtonWithdraw && (
            <>
              <div className="alert alert-success" role="alert">
                <h5>Withdraw Successful</h5>
              </div>
              <button
                type="submit"
                className="btn btn-warning"
                onClick={clearForm}
              >
                Make another Withdraw
              </button>
            </>
          )
        )}
      </div>
    </div>
  );
}
