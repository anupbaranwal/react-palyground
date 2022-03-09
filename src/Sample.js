const Sample = (props) => {
  return (
    <>
      <ul>
        {props.countries?.map((country) => (
          <li>{country}</li>
        ))}
      </ul>
      <hr />
      {props.foo()}
      <hr />
      {props.inlineEmbeddingCallback()}
    </>
  );
};

export default Sample;
