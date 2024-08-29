import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-light border-right vh-100 p-3">
      <h4 className="sidebar-heading">Dashboard</h4>
      <ul className="list-group">
        <li className="list-group-item bg-light border-0 p-2">
          <a href="#" className="text-dark text-decoration-none">Home</a>
        </li>
        <li className="list-group-item bg-light border-0 p-2">
          <a href="#" className="text-dark text-decoration-none">Reports</a>
        </li>
        <li className="list-group-item bg-light border-0 p-2">
          <a href="#" className="text-dark text-decoration-none">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;