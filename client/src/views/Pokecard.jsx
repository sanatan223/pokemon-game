import '../styles/poke-card.css'

function Pokecard(props){
    return (
        <>
            <div className='pokemon-card'>
                <img className='pokemon-img' src={`https://s3.pokeos.com/pokeos-uploads/assets/pokemon/home/render/${props.id}.png`} alt="pokemon image" />
                <div className="pokemon-data">
                    <div>
                        <p>Name: {props.name}</p>
                        <p>Type: {props.type.map((type) => type.type.name + " ")}</p>
                    </div>
                    <div>
                        <p>Experience: {props.exp}</p>
                        <p>Weight: {props.weight}Kg</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Pokecard