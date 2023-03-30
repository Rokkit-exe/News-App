import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo-no-background.png'

function Header() {
    return (
        <nav class="navbar navbar-expand navbar-dark bg-dark d-flex flex-row justify-content-between">
            <div>
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="logo image" className='mx-3 logo-size-header'/>
                </NavLink>
            </div>

            <div className="collapse navbar-collapse d-flex mx-3">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active mx-2">
                        <NavLink className="nav-link" to="/"><i class="bi bi-house me-1"></i> Home</NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link" to="/forex"><i class="bi bi-currency-exchange"></i> Forex</NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link" to="/stock"><i class="bi bi-coin"></i> Stock</NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink className="nav-link" to="/crypto"><i class="bi bi-currency-bitcoin"></i> Crypto</NavLink>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}

export default Header