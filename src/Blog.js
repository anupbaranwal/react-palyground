import React from "react";
import { useParams } from "react-router-dom";

const Blog = (props) => {
  console.log(props.match); //  check this as well
  const { year, month, day } = useParams(); //  more convenient way
  return (
    <React.Fragment>
      <p>Blog published on </p>
      <p>Year: {year}</p>
      <p>Month: {month}</p>
      <p>Day: {day}</p>
    </React.Fragment>
  );
};

export default Blog;
