import React from 'react'
import imgCircle from '../img/circles.png'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/Card.css'
import initImag from '../img/initImg.png'

const Card = ({ user, pass, imag, lColor, rColor }) => (
    <div className="container">
        <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${imgCircle}), linear-gradient(to right, 
                            ${lColor || '#FC354C'}, ${rColor || '#0ABFBC'})`
            }}
        >
            <div className="row">
                <div className="col-3">
                    <img src={imag || initImag} alt="Logo del Sitio" width="100px" max-width="100%" height="auto" className="img-fluid" />
                </div>
                <div className="col-9">
                    <h3>{user}</h3>
                    <p>{pass}</p>
                </div>
            </div>
        </div>
    </div>
)
export default Card