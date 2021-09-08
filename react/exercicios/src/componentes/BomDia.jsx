import React, { Fragment } from 'react'

export default function BomDia(props) {
    /*
    return (
        [
            <h1 key="h1">Bom Dia {props.nome}!</h1>,
            <h2 key="h2">Ate Breve!</h2>
        ]
    )
    */
    return (
        <Fragment>
            <h1>Bom Dia {props.nome}!</h1>
            <h2>Ate Breve!</h2>
        </Fragment>
    )
}