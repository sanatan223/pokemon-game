function Pokecard(){
    return (
        <>
            <div className='pokemon-card'>
                <img className='pokemon-img' src="https://s3.pokeos.com/pokeos-uploads/assets/pokemon/home/render/376.png" alt="pokemon image" />
                <div className="pokemon-data">
                <div>
                    <p>Name: Probopass</p>
                    <p>Type: Rock/Steel</p>
                </div>
                <div>
                    <p>Gender: Male</p>
                    <p>Catch: 23%</p>
                </div>
                </div>
            </div>
        </>
    )
}


export default Pokecard