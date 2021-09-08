import React from 'react'
import './Nav.css'
import NavItem from './NavItem'

const output = props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" name="Início"/>
            <NavItem icon="users" name="Usuários" link="users"/>
        </nav>
    </aside>

export default output