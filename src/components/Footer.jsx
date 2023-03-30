import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo-no-background.png'

function Footer() {
    return (
        <div className='bg-dark p-3'>
            <div className='navbar container d-flex flex-row justify-content-between align-items-center text-light'>
                <div className='my-2'>
                    <img src={logo} alt="logo image" className='logo-size-footer m-1'/> © 2023 Francis Di-Folco, Inc.
                </div>
                <div className='my-2 text-light'>
                    <div><i class="bi bi-person-circle me-1"></i> Francis Di-Folco</div>
                    <div><i class="bi bi-envelope me-1"></i> Francis.DiFolco@icloud.com</div>
                    <div><i class="bi bi-telephone me-1"></i> Canada (+1) 514-797-2151</div>
                    <div>
                        <i class="bi bi-github me-2"></i> 
                        <a href='https://github.com/Rokkit-exe'>github.com/Rokkit-exe</a>
                    </div>
                </div>
                <div className='d-flex flex-column my-2'>
                    <NavLink to="/" className="nav-link"><i class="bi bi-house me-1"></i> Home</NavLink>
                    <NavLink className="nav-link" to="/forex"><i class="bi bi-currency-exchange"></i> Forex</NavLink>
                    <NavLink className="nav-link" to="/stock"><i class="bi bi-coin"></i> Stock</NavLink>
                    <NavLink className="nav-link" to="/crypto"><i class="bi bi-currency-bitcoin"></i> Crypto</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Footer