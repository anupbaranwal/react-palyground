const Greeting = (props) => {
  return (
    <>
      <h2>Hello {props.name}!!</h2>
      <h2> How are you?</h2>
      <hr />
      <h3>{props.children}</h3>
    </>
  );
};

export default Greeting;
