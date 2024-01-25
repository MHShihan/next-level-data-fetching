"use client";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold my-10 text-center">Users</h1>
      <div className="grid grid-cols-2 gap-20">
        {users.map((user) => (
          <div key={user.id} className="card bg-amber-500 shadow-xl ">
            <div className="card-body">
              <h2 className="card-title text-2xl">{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
