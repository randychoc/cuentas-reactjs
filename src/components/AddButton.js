import React from 'react'
import './styles/AddButton.css'
import ImgAdd from '../img/add.png'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

const AddButton = () => (
    <div className="container">
        <div className="row">
            <div className="col-5"></div>
            <div className="col-2">
                <Link title="Agregar Cuenta" to="/cuentas/nueva" >
                    <img src={ImgAdd} alt="Logo de la App" className="btnAdd" />
                </Link>
            </div>
            <div className="col-5"></div>
        </div>
    </div>
)

export default AddButton