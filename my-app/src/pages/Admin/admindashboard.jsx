import React from 'react'

import Navbar from '../../components/navigation/navbar/mainNavbar.jsx';
import Sidebar from '../../components/navigation/sidebar/adminSidebar.jsx';

import Userview from '../../components/navigation/panel/admin/seeUsers.jsx';

import './admin.css'

const AdminDashboard = () => {
  return (
    <>
      <div className="admin-dashboard-container">
        <Navbar />
        <Sidebar />
        <Userview />
      </div>
    </>
  )
}

export default AdminDashboard;
