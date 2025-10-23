import React, { useState } from 'react';

// Import Bootstrap component
import Table from 'react-bootstrap/Table';

import EditIcon from '../../../img/icons/edit.svg';
import TrashCaneIcon from '../../../img/icons/trash.svg';


import './userview.css';


const SeeUsers = () => {
    return (
        <>
            <div className="see-users-container">
                <Table responsive className='table-container'>
                    <thead className='table-head'>
                        <tr className='table-row'>
                            <th className='row-head'>
                                ID
                            </th>
                            <th className='row-head'>
                                Nombre
                            </th>
                            <th className='row-head'>
                                Apellido
                            </th>
                            <th className='row-head'>
                                Correo
                            </th>
                            <th className='row-head'>
                                Reservas
                            </th>
                            <th className='row-head'>
                                Estado
                            </th>
                            <th className='row-head'>
                                Opciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {/* Aquí se pueden mapear los usuarios desde un estado o props */}
                        <tr className='table-row'>
                            <td className='row-data'>1</td>
                            <td className='row-data'>Juan</td>
                            <td className='row-data'>Pérez</td>
                            <td className='row-data'>example@gmail.com</td>
                            <td className='row-data'>5</td>
                            <td className='row-data'>Al día</td>
                            <td className='row-data edit-user'>
                                <button className='modify-btn btn'>
                                    <span>
                                        <img src={EditIcon} alt="" className='icon' />
                                    </span>
                                </button>
                                <button className='delete-btn btn'>
                                    <span>
                                        <img src={TrashCaneIcon} alt="" className='icon' />
                                    </span>
                                </button>
                            </td>
                        </tr>
                         <tr className='table-row'>
                            <td className='row-data'>1</td>
                            <td className='row-data'>Juan</td>
                            <td className='row-data'>Pérez</td>
                            <td className='row-data'>example@gmail.com</td>
                            <td className='row-data'>5</td>
                            <td className='row-data'>Al día</td>
                            <td className='row-data edit-user'>
                                <button className='modify-btn btn'>
                                    <span>
                                        <img src={EditIcon} alt="" className='icon' />
                                    </span>
                                </button>
                                <button className='delete-btn btn'>
                                    <span>
                                        <img src={TrashCaneIcon} alt="" className='icon' />
                                    </span>
                                </button>
                            </td>
                        </tr>
                         <tr className='table-row'>
                            <td className='row-data'>1</td>
                            <td className='row-data'>Juan</td>
                            <td className='row-data'>Pérez</td>
                            <td className='row-data'>example@gmail.com</td>
                            <td className='row-data'>5</td>
                            <td className='row-data'>Al día</td>
                            <td className='row-data edit-user'>
                                <button className='modify-btn btn'>
                                    <span>
                                        <img src={EditIcon} alt="" className='icon' />
                                    </span>
                                </button>
                                <button className='delete-btn btn'>
                                    <span>
                                        <img src={TrashCaneIcon} alt="" className='icon' />
                                    </span>
                                </button>
                            </td>
                        </tr>
                         <tr className='table-row'>
                            <td className='row-data'>1</td>
                            <td className='row-data'>Juan</td>
                            <td className='row-data'>Pérez</td>
                            <td className='row-data'>example@gmail.com</td>
                            <td className='row-data'>5</td>
                            <td className='row-data'>Al día</td>
                            <td className='row-data edit-user'>
                                <button className='modify-btn btn'>
                                    <span>
                                        <img src={EditIcon} alt="" className='icon' />
                                    </span>
                                </button>
                                <button className='delete-btn btn'>
                                    <span>
                                        <img src={TrashCaneIcon} alt="" className='icon' />
                                    </span>
                                </button>
                            </td>
                        </tr>

                         <tr className='table-row'>
                            <td className='row-data'>1</td>
                            <td className='row-data'>Juan</td>
                            <td className='row-data'>Pérez</td>
                            <td className='row-data'>example@gmail.com</td>
                            <td className='row-data'>5</td>
                            <td className='row-data'>Al día</td>
                            <td className='row-data edit-user'>
                                <button className='modify-btn btn'>
                                    <span>
                                        <img src={EditIcon} alt="" className='icon' />
                                    </span>
                                </button>
                                <button className='delete-btn btn'>
                                    <span>
                                        <img src={TrashCaneIcon} alt="" className='icon' />
                                    </span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <div className="stats-container">
                    <div className="counter">
                        Usuarios Totales: &nbsp; &nbsp; 0 &nbsp; &nbsp; 
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeeUsers;
