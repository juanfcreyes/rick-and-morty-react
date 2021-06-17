import { useMemo } from "react";
import { useSelector } from "react-redux";
import { IMAGE_URL } from "../data/constants";
import { uppercaseFirstLetter } from "../helpers/upperCaseFirstLetter";

export const PokemonDetails = () => {

    const { active: pokemon } = useSelector(state => state.app);

    return useMemo(() => {
        if (!pokemon) {
            return <div></div>
        }

        return (<div className="card">
            <div className="card-header center">
                Pokemon details
            </div>
            <div className="card-body">
                <div className="center" >
                    <img width="70px" src={`${IMAGE_URL}${pokemon.id}.png`} alt={pokemon.name}></img>
                </div>
                <p> <strong> Pokemon: </strong> {uppercaseFirstLetter(pokemon.name)}</p>
                <p> <strong> Numer: </strong>  #{pokemon.id}</p>
                <p> <strong> Types:</strong> {pokemon.types}  </p>
                <p> <strong> Weight: </strong>{pokemon.weight} </p>
            </div>
        </div>)
    }, [pokemon])

}