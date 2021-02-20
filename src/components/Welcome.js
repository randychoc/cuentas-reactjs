import React from 'react'
import './styles/Welcome.css'

const Welcome = ({ usuario }) => (
    <div className="container">
        <div className="Fitness-User-Info">
            <h2>Bienvenido {usuario}!</h2>
            <p>Mantén tus cuentas seguras en un solo lugar.</p>
        </div>
    </div>
)

export default Welcome