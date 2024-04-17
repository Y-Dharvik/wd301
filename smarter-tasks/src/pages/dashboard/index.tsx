import React from 'react';
import UserDetails from './UserDetails';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="flex justify-end">
        <button
          type="button"
          className="mt-4 mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <Link
            id='logout-link'
            to="/signin"
            onClick={() => {
              localStorage.removeItem("authToken");
              localStorage.removeItem("userData");
              localStorage.setItem("message", "You have been logged out");
            }}
          >
            Logout
          </Link>
        </button>
      </div>
      <div className="items-center justify-center bg-gray-100">
        <div className="px-10 py-10 bg-white">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Dashboard
          </h1>
          <UserDetails />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;