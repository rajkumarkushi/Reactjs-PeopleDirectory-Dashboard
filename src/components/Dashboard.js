import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="mt-4">
              <h1>Welcome to the Dashboard!</h1>
              <p>This is your dashboard where you can manage all your activities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;