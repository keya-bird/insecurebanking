function AllData() {
  const ctx = React.useContext(UserContext);

  let users = [...ctx.users];
  console.log(JSON.stringify(users));

  function userInfo(user) {
    return [user.name, user.email, user.password, user.balance];
  }

  return (
    <>
      {ctx.users.map((user, i) => (
        <Card
          index={i}
          key={i}
          bgcolor="light"
          txtcolor="black"
          header="Account Summary"
          text={`
          Name: ${user.name} |
          Email: ${user.email} |
          Password: ${user.password} |
          Balance: ${user.balance} 
        `}
        ></Card>
      ))}
    </>
  );
}
