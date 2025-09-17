import '../styles/navbar.css'
import React from 'react';
import { useNavigate } from 'react-router-dom'

function Navbar(){
    const navigate = useNavigate();
    return (
        <>
            <div className="navbar">
                <div><img className='logo' src="logo.png" alt="Pokemon container" /></div>
                <button onClick={() => {navigate('/new')}}>
                Add Pokemon</button>
            </div>
        </>
    )
}

export default Navbar