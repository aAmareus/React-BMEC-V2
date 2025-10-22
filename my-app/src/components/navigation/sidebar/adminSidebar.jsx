import React from 'react';

import { Link } from 'react-router-dom';

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
                            ✕
                        </span>
                    </li>
                    <li className="sidebar-item">
                        <p>
                            Historial Reservas
                        </p>
                        <span>
                            ✕
                        </span>
                    </li>
                    <li className="sidebar-item">
                        <p>
                            Reservas activas
                        </p>
                        <span>
                            ✕
                        </span>
                    </li>
                    <li className="sidebar-item">
                        <p>
                            Ver Catálogo
                        </p>
                        <span>
                            ✕
                        </span>
                    </li>
                    <li className="sidebar-item">
                        <p>
                            Modificar Catálogo
                        </p>
                        <span>
                            ✕
                        </span>
                    </li>
                    <li className="sidebar-item">
                        <p>
                            Cerrar Sesión
                        </p>
                        <span>
                            ✕
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default AdminSidebar;
