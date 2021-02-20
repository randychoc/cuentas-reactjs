import { useState, useEffect } from 'react'

const useFetch = url => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {        
        const fetchCuentas = async () => {
            try {
                let respuesta = await fetch(url)                
                let data = await respuesta.json()                
                setData(data.cuentas)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchCuentas()
    }, [url])

    return { data, loading, error }
}
export default useFetch