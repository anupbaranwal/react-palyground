const Sample = (props) => {
  return (
    <>
      <ul>
        {props.countries?.map((country) => (
          <li>{country}</li>
        ))}
      </ul>
      <hr />
    </>
  );
};

export default Sample;
