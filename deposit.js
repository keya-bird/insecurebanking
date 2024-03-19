function Deposit() {
  function handle() {
    return true;
  }

  return (
    <Card
      bgcolor="light"
      header="Deposit"
      txtcolor="dark"
      deposit={handle}
      submitButtonDeposit="Deposit Successful"
    />
  );
}
