import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Blog = (props) => {
  const { year, month, day } = useParams(); //  more convenient way
  const [users, setUsers] = useState([]);

  const loadBlogUsers = () => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      setUsers(() => {
        return res.data.data;
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
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Avatar</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td className="fw-bold">{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.avatar} alt="avatar" height="60" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Blog;
