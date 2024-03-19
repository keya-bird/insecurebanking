function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);
  let users = [...ctx.users];

  const [buttonText, setButtonText] = React.useState("Create Account");

  function validate(value, name) {
    if (value.length > 1) return true;
    else return false;
  }

  function validateName(name) {
    const nameRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    return nameRegex.test(name);
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleCreate() {
    const nameInput = document.getElementById("name");
    const name = nameInput.value.trim();
    if (!validate(name, "name") || !validate(password, "password")) return;

    if (name === "") {
      swal("Please enter your name.");
      return false;
    }

    if (!validateName(name)) {
      swal(
        "Invalid Characters Detected",
        "Please enter a valid name!",
        "error"
      );
      return false;
    }

    if (email === "") {
      swal("Please enter your email");
      return false;
    } else if (!validateEmail(email)) {
      // Use the validateEmail function here
      swal("Invalid email address!", "Please Try Again", "warning");
      return false;
    }

    if (password === "") {
      swal("Please enter in a password");
      return false;
    }

    if (password.length < 8) {
      swal("Password less than 8 characters", "Try Again", "error");
      return false;
    }

    if (
      !validate(name, "name") &&
      !validate(email, "email") &&
      !validate(password, "password")
    ) {
      return;
    }
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password,
      balance: 100,
    };
    await ctx.users.push(newUser);
    swal({
      title: "User created successfully!",
      icon: "success",
    });
    setShow(false);
    setButtonText("Add Another Account");
  }

  function clearForm() {
    setName("");
    setPassword("");
    setEmail("");
    setShow(true);
    setButtonText("Create Account");
  }

  return (
    <Card
      bgcolor="light"
      header="Create Account"
      txtcolor="dark"
      body={
        <>
          <br />
          <label htmlFor="name">Enter Name</label>
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
          <label htmlFor="email">Enter Email</label>
          <br />
          <input
            type="input"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <br />

          <br />
          <label htmlFor="password">Enter Password</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password (7+ characters)"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <br />
          <button
            type="submit"
            disabled={name === "" || email === "" || password === ""}
            className="btn btn-light"
            onClick={() => {
              handleCreate();
              clearForm();
            }}
          >
            {buttonText}
          </button>
        </>
      }
    />
  );
}
