import '../styles/navbar.css'
import { useNavigate } from 'react-router-dom'
import pokeballLeftUrl from '../assets/pokeball-left.svg'
import pokeballRightUrl from '../assets/pokeball-right.svg'

function Navbar(props){
    const navigate = useNavigate();

    return (
        <>
            <div className="navbar">
                <img className='logo' src="logo.png" alt="Pokemon container" />
                <div className='button-container' >
                    <img className='pokeball' src={pokeballLeftUrl} alt="pokeball" />
                    <button
                        onClick={() => navigate(props.destination)}
                    >
                        {props.display}
                    </button>
                    <img className='pokeball' src={pokeballRightUrl} alt="pokeball" />
                </div>
            </div>
        </>
    )
}

export default Navbar