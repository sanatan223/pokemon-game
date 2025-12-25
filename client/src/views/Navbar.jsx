import '../styles/navbar.css'
import React from 'react';
import { useNavigate, Link } from 'react-router-dom'

function Navbar(){
    const navigate = useNavigate();
    return (
        <>
            <div className="navbar">
                <div><img className='logo' src="logo.png" alt="Pokemon container" /></div>
                <Link to="addPokemon">Add Pokemon</Link>
            </div>
        </>
    )
}

export default Navbar