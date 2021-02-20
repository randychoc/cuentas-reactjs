import React from 'react'
import Card from './Card'

const ListaCuentas = ({cuentas}) => (
    <div>
        {cuentas.map((cuenta) => {
            return (
                <Card
                    key={cuenta._id}
                    {...cuenta}
                />
            )
        })
        }
    </div>
)

export default ListaCuentas