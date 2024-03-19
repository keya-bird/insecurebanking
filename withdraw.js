function Withdraw() {
  function handle() {
    return true;
  }

  return (
    <Card
      bgcolor="light"
      header="Withdraw"
      txtcolor="dark"
      withdraw={handle}
      submitButtonWithdraw="Withdrawl Successful"
    />
  );
}
