import React from 'react'
import '../components/styles/AddButton.css'
import 'bootstrap/dist/css/bootstrap.css'

const CuentaNuevaForm = ({ onChange, onSubmit, form }) => (
    <div className="container">
        <br />
        <form onSubmit={onSubmit} >
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Usuario o Correo Electrónico"
                    name="user"
                    onChange={onChange}
                    value={form.user}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Contraseña"
                    name="pass"
                    onChange={onChange}
                    value={form.pass}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Logo del Sitio"
                    name="imag"
                    onChange={onChange}
                    value={form.imag}
                />
            </div>
            <div className="form-row">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="1er Color"
                        name="lColor"
                        onChange={onChange}
                        value={form.lColor}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="2do Color"
                        name="rColor"
                        onChange={onChange}
                        value={form.rColor}
                    />
                </div>
            </div>
            <br />
            <button
                type="submit"
                className="btn btn-primary"
            >
                AGREGAR
                </button>
        </form>
    </div>
)
export default CuentaNuevaForm