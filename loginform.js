function LoginForm() {
  const [show, setShow] = React.useState(true);
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const ctx = React.useContext(UserContext);
  let users = [...ctx.users];

  function validate(value, name) {
    if (value.length > 1) return true;
    else return false;
  }

  function handleLogin() {
    if (!validate(name, "name") || !validate(password, "password")) return;

    const foundUser = users.find((user) => user.name === name);

    if (!foundUser) {
      swal(
        "User does not exist!",
        "Please create an account or try different credentials",
        "error"
      );
      setShow(true);
      clearForm();
      return;
    }

    if (foundUser.password !== password) {
      swal("Incorrect Password!", "...please try again!", "error");
      setShow(true);
      setPassword("");
      return;
    }

    const userID = foundUser.id;
    swal({
      title: "Welcome to Banking Insecure!",
      text: `Current User is ${foundUser.name} with user id: ${userID}`,
      icon: "success",
      button: "Go to Account!",
    }).then(() => {
      // Navigate to the desired URL when the button is clicked
      window.location.href =
        "https://keya-birdsbillbankingapplication.s3.us-east-2.amazonaws.com/index.html#/";
    });

    setShow(false);
    console.log(name, password, userID);
    assignUserID(userID);
  }

  function clearForm() {
    setName("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="light"
      header="Account Login"
      txtcolor="dark"
      body={
        <>
          <br />
          <img
            src="profilesm.png"
            className="img-fluid rounded-circle"
            alt="Profile Image"
          />
          <br />
          <label htmlFor="name">Enter Account Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <br />
          <br />
          <label htmlFor="password">Enter Password</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <br />
          <button
            type="submit"
            disabled={
              !validate(name, "name") || !validate(password, "password")
            }
            className="btn btn-light"
            onClick={() => {
              handleLogin();
              clearForm();
            }}
          >
            Login
          </button>
        </>
      }
    />
  );
}
