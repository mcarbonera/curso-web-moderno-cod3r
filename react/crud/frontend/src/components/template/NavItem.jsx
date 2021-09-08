import React from 'react'
import { Link } from 'react-router-dom'

const output = props =>
    <Link to={`/${props.link ? props.link : ''}`}>
        <i className={`fa fa-${props.icon}`}></i> {props.name}
    </Link>

export default output