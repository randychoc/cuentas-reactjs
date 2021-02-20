import React from 'react'
import ListaCuentas from '../components/ListaCuentas'
import Welcome from '../components/Welcome'
import AddButton from '../components/AddButton'
import Loading from '../components/Loading'
import FatalError from './500'
import useFetch from '../hooks/useFetch'
import url from './config'

const Cuentas = () => {
    // , { mode: 'cors' }
    const { data, loading, error } = useFetch(`${url}/cuentas`, { mode: 'cors' })

    if (loading)
        return <Loading />
    if (error) {
        console.log('Error en Cuentas: ' + error)
        return <FatalError />
    }

    return (
        <React.Fragment>
            <Welcome
                usuario="Randy Choc"
            />
            <ListaCuentas
                cuentas={data}
            />
            <AddButton />
        </React.Fragment>
    )

}
export default Cuentas