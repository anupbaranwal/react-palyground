const Sample = (props) => {
  return (
    <>
      <ul>
        {props.countries?.map((country) => (
          <li>{country}</li>
        ))}
      </ul>
    </>
  );
};

export default Sample;
