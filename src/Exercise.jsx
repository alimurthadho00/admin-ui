import React from "react";
import UserCard from "./UserCard";

function Exercise() {
    const users = [
    {
      name: "April",
      email: "april@gmail.com",
      street: "Jl. Indraprasta",
      city: "Semarang",
      age: 25,
    },
    {
      name: "Yani",
      email: "yani@gmail.com",
      street: "Jl. Imam Bonjol",
      city: "Ungaran",
    },
    {
      name: "Safitri",
      email: "safitri@gmail.com",
      street: "Jl. Pemuda",
      city: "Kendal",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard {...users[0]}/>
          <UserCard {...users[1]}/>
          <UserCard {...users[2]}/>
        </div>
      </div>
    </>
  );
}

export default Exercise;