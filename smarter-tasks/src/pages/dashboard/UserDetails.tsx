import React from "react";

const UserDetails: React.FC = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const name = userData.name;
    const email = userData.email;
  return (
    <div className="items-center justify-center bg-gray-100 md">
      <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
        User Details
      </h1>
      <p className="text-center">
        Name: {name} <br />
        Email: {email}
      </p>
    </div>
  );
};

export default UserDetails;