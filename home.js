function Home() {
  return (
    <Card
      bgcolor="light"
      txtcolor="dark"
      header="Insecure Bank"
      title="Welcome to Insecure Bank"
      text="MIT Bad Bank exercise - This app is insecure!"
      body={
        <img src="moneybag.png" className="img-fluid" alt="Responsive image" />
      }
    />
  );
}
