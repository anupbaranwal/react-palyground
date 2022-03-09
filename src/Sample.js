import { useEffect } from "react";

const Sample = (props) => {
  useEffect(() => {
    //  acquire
    console.log("Sample: First Render");

    return () => {
      //  release
      console.log("Sample: Unmounting");
    };
  }, []);

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
