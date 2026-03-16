import '../../styles/navbar.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/UserContext';
import Popup from './Popup';

function Navbar() {
    const navigate = useNavigate();
    const { user, logout} = useAuth();
    const location = useLocation();

    return (
        <>
            {user && (
                <Popup
                message={`${user.username} has logged in!`}
                duration={3000}
                />
            )}
            <div className="navbar">
                <div
                    className="home-shadow"
                    style={{
                        borderBottom: location.pathname === '/' ? '5px solid purple' : 'none',
                    }}
                    >
                    <div onClick={() => navigate('/')} className='home-button'>
                        <div className="gradient-text">Home</div>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div className='logo-container-border'>
                        <div className="logo-container"><img className='logo' src="logo.png" alt="Pokemon container" /></div>
                    </div>
                    <div
                    className='login-redirect-btn'
                    style={{
                        display: location.pathname === '/login' || location.pathname === '/signup' ?'none' : 'block',
                    }}
                    onClick={() => user? logout() : navigate('/login')}
                    >{user? 'Logout': 'Login'}</div>
                </div>
                <div
                    className="capture-shadow"
                    style={{
                        borderBottom: location.pathname === '/addpokemon' ? '5px solid purple' : 'none',
                    }}
                    >
                    <div onClick={() => navigate('/addpokemon')} className='capture-button' >
                        <div className="gradient-text">Capture</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar