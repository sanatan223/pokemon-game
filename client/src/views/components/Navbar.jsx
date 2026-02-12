import '../../styles/navbar.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/UserContext';

function Navbar(props) {
    const navigate = useNavigate();
    const { user, logout} = useAuth();

    return (
        <>
            <div className="navbar">
                <div
                    className="home-shadow"
                    style={{
                        borderColor: !props.isHome ? 'transparent' : 'purple'
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
                    onClick={() => user? logout() : navigate('/login')}
                    >{user? 'Logout': 'Login'}</div>
                </div>
                <div
                    className="capture-shadow"
                    style={{
                        borderBottom: props.isHome ? 'none' : '5px solid purple',
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