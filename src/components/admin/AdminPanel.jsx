import React, { useState } from 'react';
import './AdminPanel.css'; // Import the CSS file for styling
import Signup from './Signup'; // Import the Register User component
import ShowAllUsers from './ShowAllUsers'; // Import the Show All Users component

const AdminPanel = () => {
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showAllUsersModal, setShowAllUsersModal] = useState(false);

    const handleToggleRegisterModal = () => {
        setShowRegisterModal(!showRegisterModal);
        setShowAllUsersModal(false); // Close Show All Users modal
    };

    const handleToggleShowAllUsersModal = () => {
        setShowAllUsersModal(!showAllUsersModal);
        setShowRegisterModal(false); // Close Register User modal
    };

    return (
        <div className="admin-panel-container">
            <nav className="admin-navbar">
                <div className="navbar-left">
                    <span className="navbar-brand">Admin Panel</span>
                </div>
                <div className="navbar-right">
                    <ul className="nav-links">
                        <li><button onClick={handleToggleRegisterModal}>Register User</button></li>
                        <li><button onClick={handleToggleShowAllUsersModal}>Show All Users</button></li>
                        {/* Add more navigation links here */}
                    </ul>
                </div>
            </nav>
            <div className="admin-content">
                {/* Modals for Register User and Show All Users */}
                {showRegisterModal && <Signup onClose={() => setShowRegisterModal(false)} />}
                {showAllUsersModal && <ShowAllUsers onClose={() => setShowAllUsersModal(false)} />}
            </div>
        </div>
    );
};

export default AdminPanel;
