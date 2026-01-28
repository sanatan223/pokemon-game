import { useEffect, useState } from 'react'
import '../styles/poke-card.css'
import cave from '../assets/backgrounds/cave-background.webp';
import forest from '../assets/backgrounds/forest-background.webp'
import grassland from '../assets/backgrounds/grassland-background.webp'
import mountain from '../assets/backgrounds/mountain-background.webp'
import rare from '../assets/backgrounds/rare-background.webp'
import roungTerrain from '../assets/backgrounds/rough-terrain-background.webp'
import sea from '../assets/backgrounds/sea-background.webp'
import urban from '../assets/backgrounds/urban-background.webp'
import watersEdge from '../assets/backgrounds/waters-edge-background.webp'

const habitatMap = {
    cave: cave,
    forest: forest,
    grassland: grassland,
    mountain: mountain,
    rare: rare,
    'rough-terrain': roungTerrain,
    sea: sea,
    urban: urban,
    'waters-edge': watersEdge
};

function Pokecard(props){
    const [habitat, setHabitat] = useState('grassland');
    
    useEffect(() => {
        const getHabitat = async() => {
            const habitatData = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${props.name}/`)
            .then(res => res.json())
            .then(data => setHabitat(data.habitat?.name ?? "forest"))
        }
        getHabitat();
    }, [props.name]);

    console.log(habitat)

    return (
        <>
            <div className='pokemon-card'>
                <div className='pokemon-img-holder'>
                    <img
                        className='pokemon-img'
                        src={`https://s3.pokeos.com/pokeos-uploads/assets/pokemon/home/render/${props.id}.png`}
                        alt="pokemon image"
                        style={{backgroundImage: `url(${habitatMap[habitat] || ''}`}}
                        />
                </div>
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