import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { IMAGE_URL } from "../data/constants";
import { getPokemon, setActive } from '../store/appReducer';
import { uppercaseFirstLetter } from "../helpers/upperCaseFirstLetter";

export const PokemonCard = ({ pokemonUrl }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemon(pokemonUrl));
    }, [dispatch, pokemonUrl]);

    const { pokemonsDetails } = useSelector(state => state.app);
    
    const handleClick = () => {
        dispatch(setActive(pokemon));
    };
    const pokemon = pokemonsDetails[pokemonUrl];

    if (!pokemon) {
        return <div>Loading...</div>
    }
    return (<div className="card mb-4 ">
        <div className="center">
            <img width="70px" src={`${IMAGE_URL}${pokemon.id}.png`} alt={pokemon.name}></img>
            <p>{uppercaseFirstLetter(pokemon.name)}</p>
            <p><strong>#{pokemon.id}</strong></p>
        </div>
        <div className="card-footer center" >
            <button className="btn btn-dark" onClick={handleClick}>View details</button>
        </div>
    </div>);
};