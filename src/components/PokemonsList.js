import { useMemo } from "react";
import { useSelector } from "react-redux";
import { PokemonCard } from "./PokemonCard";

export const PokemonsList = () => {

    const { data: pokemons } = useSelector((state) => state.app);

    return useMemo(() =>
    (
        <div className='row list-container'>
            {pokemons.map((pokemon) => (
                <div className='col-4' key={pokemon.name}>
                    { <PokemonCard
                        key={pokemon.name}
                        pokemonUrl={pokemon.url}
                    ></PokemonCard>}
                </div>
            ))}
        </div>
    ), [pokemons])
};
