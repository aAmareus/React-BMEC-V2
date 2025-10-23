import React from 'react';

// Importing icons
import ProfileIcon from '../../img/icons/user.svg';
import History from '../../img/icons/history.svg';
import Active from '../../img/icons/bookmark.svg';
import BookIcon from '../../img/icons/book.svg';
import EditIcon from '../../img/icons/pen.svg';
import LogoutIcon from '../../img/icons/logout.svg';

import './sidebar.css';

const AdminSidebar = () => {
    return (
        <>
            <div className="sidebar-container">
                <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <p>
                            Usuarios
                        </p>
                        <span>
                            <img src={ProfileIcon} alt="profile icon" className='icon' />
                        </span>
                    </li>
                    <li className="sidebar-item">
                        <p>
                            Historial Reservas
                        </p>
                        <span>
                            <img src={History} alt="history icon" className='icon' />
                        </span>
                    </li>
                    <li className="sidebar-item">
                        <p>
                            Reservas activas
                        </p>
                        <span>
                            <img src={Active} alt="bookmark icon" className='icon' />
                        </span>
                    </li>
                    <li className="sidebar-item">
                        <p>
                            Ver Catálogo
                        </p>
                        <span>
                            <img src={BookIcon} alt="book icon" className='icon' />
                        </span>
                    </li>
                    <li className="sidebar-item">
                        <p>
                            Modificar Catálogo
                        </p>
                        <span>
                            <img src={EditIcon} alt="edit icon" className='icon' />
                        </span>
                    </li>
                    <li className="sidebar-item">
                        <p>
                            Cerrar sesión
                        </p>
                        <span>
                            <img src={LogoutIcon} alt="logout icon" className='icon' />
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default AdminSidebar;
