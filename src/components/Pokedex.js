import { useDispatch, useSelector } from "react-redux";
import { PokemonDetails } from "./PokemonDetails";
import { callApi } from "../store/appReducer";
import { PokemonsList } from "./PokemonsList";
import { useEffect, useState } from "react";

export const Pokedex = () => {

    const dispatch = useDispatch();

    const [query, setQuery] = useState("");

    const handleOnChange = (event) => {
        setQuery(event.target.value);
    }

    const hanldeOnSubmit = (event) => {
        event.preventDefault();
        console.log(query)
    }

    const { next, previous } = useSelector(state => state.app);

    const handleOnNext = (event) => {
        event.preventDefault();
        dispatch(callApi(next));
    }

    const handleOnPrevious = (event) => {
        event.preventDefault();
        dispatch(callApi(previous));
    }


    useEffect(() => {
        dispatch(callApi());
    }, [dispatch]);

    return (
        <div>
            <form className="row" onSubmit={hanldeOnSubmit}>
                <div className="col-8">
                    <input type="text" className="form-control" id="query" placeholder="Insert a pokemon id or name" onChange={handleOnChange} />
                </div>
                <div className="col-4">
                    <button type="submit" className="btn btn-dark mb-3" >Search</button>
                </div>
            </form>

            <div className='row'>
                <div className='col-8'>
                    <PokemonsList></PokemonsList>
                </div>
                <div className='col-4'>
                    <PokemonDetails></PokemonDetails>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row justify-content-evenly">
                    <div className="col-4">
                        <button onClick={handleOnPrevious} disabled={!previous} className="btn btn-dark">Previuos</button>
                    </div>
                    <div className="col-4">
                        <button onClick={handleOnNext} disabled={!next} className="btn btn-dark">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
