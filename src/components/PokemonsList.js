import { useDispatch, useSelector } from "react-redux";
import { PokemonDetails } from "./PokemonDetails";
import { callApi } from "../store/appReducer";
import { PokenmonCard } from "./PokemonCard";

export const PokemonsList = () => {
	const dispatch = useDispatch();
	dispatch(callApi());
	const { data: pokemons } = useSelector((state) => state.app);

	return (
		<div className='row'>
			<div className='col-8'>
				<div className='row'>
					{pokemons.map((pokemon) => (
						<div className='col-4' key={pokemon.name}>
							{/* <PokenmonCard
								key={pokemon.name}
								pokemonUrl={pokemon.url}
							></PokenmonCard> */}
						</div>
					))}
				</div>
			</div>
			<div className='col-4'>
				<PokemonDetails></PokemonDetails>
			</div>
		</div>
	);
};
