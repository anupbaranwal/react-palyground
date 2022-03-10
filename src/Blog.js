import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blog = (props) => {
  const { year, month, day } = useParams(); //  more convenient way
  const [users, setUsers] = useState({});

  const loadBlogUsers = () => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      setUsers(() => {
        return res.data;
      });
    });
  };

  return (
    <>
      <button className="btn btn-primary" onClick={loadBlogUsers}>
        Load Blog Users
      </button>
      <p>
        Blog published on {day}-{month}-{year}
      </p>
      <hr />
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </>
  );
};

export default Blog;
