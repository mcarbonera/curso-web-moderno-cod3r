import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import { BoaTarde, BoaNoite } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

//ReactDOM.render(<Primeiro />, document.getElementById('root'))
//ReactDOM.render(<BomDia nome="Marcelo Carbonera"/>, document.getElementById('root'))

ReactDOM.render(
    <div>
        <Primeiro />
        <BomDia nome="Marcelo Carbonera"/>
        <BoaTarde nome="Marcelo Carbonera"/>
        <BoaNoite nome="Marcelo Carbonera"/>
        <Saudacao tipo="Bom Dia" nome="Joao"/>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro"/>
            <Filho nome="Paulo"/>
            <Filho nome="Carla"/>
        </Pai>
    </div>
, document.getElementById('root'))