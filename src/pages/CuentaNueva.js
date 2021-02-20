import React from 'react'
import CuentaNuevaForm from '../components/CuentaNuevaForm'
import '../components/styles/AddButton.css'
import Card from '../components/Card'
import FatalError from './500'
import url from './config'

class CuentaNueva extends React.Component {
    state = {
        form: {
            user: '',
            pass: '',
            imag: '',
            lColor: '',
            rColor: ''
        },
        loading: false,
        error: null
    }
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        this.setState({
            loading: true
        })
        e.preventDefault()
        // console.log(this.state)
        try {
            let config = {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let res = await fetch(`${url}/cuentas`, config)
            let json = await res.json()
            console.log(json)

            this.setState({
                loading: false
            })
            this.props.history.push('/cuentas')
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }

    }
    render() {
        if (this.state.error)
            return <FatalError />

        return (
            <div className="row">
                <div className="col-sm">
                    <br /><br />
                    <Card {...this.state.form} />
                </div>
                <div className="col-sm">
                    <CuentaNuevaForm
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        form={this.state.form}
                    />
                </div>
            </div>
        )
    }
}
export default CuentaNueva