import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { getPokemon } from '../store/appReducer';
export const PokenmonCard = ({pokemonUrl}) => {

    console.log(pokemonUrl)
    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    const dispatch = useDispatch();
    dispatch(getPokemon(pokemonUrl));
    const {pokemonsDetails} = useSelector(state => state.app)
    return (
    <div>
        <img src={imageUrl} alt='1'></img>
        <p>Bulvasor</p>
        <spna>#1</spna>
    </div>)

}