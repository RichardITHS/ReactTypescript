import React from 'react'

type StatusProps = {
    status: string
}

//Nedan ett steg ytterligare, tvingar typen att det ska endast vara nedan alternativ
/* type StatusProps = {
    status: 'loading' | 'success' | 'error'
} */

function Status(props: StatusProps) {
    let message

    if (props.status === 'loading') {
        message = 'Laddar'
    } else if (props.status === 'success') {
        message = 'All data har inhämtats'
    } else if (props.status === 'error') {
        message = 'Vi har ett error'
    }

    return (
        <div>
            {/*  <h2>Laddar...</h2>
        <h2>Sidan har gjort en fetch</h2>
        <h2>Error vid fetch</h2> */}
            <h2>Status - {message}</h2>
        </div>
    )
}

export default Status
