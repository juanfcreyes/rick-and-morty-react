import { useState } from "react";
import { useDispatch } from "react-redux";
import { API_URL } from "../data/constants";
import { callApi } from "../store/appReducer";

export const SearchBar = () => {
    const dispatch = useDispatch();

	const [query, setQuery] = useState("");

	const handleOnChange = (event) => {
		setQuery(event.target.value);
	};

	const hanldeOnSubmit = (event) => {
		event.preventDefault();
        if (query) {
            dispatch(callApi(`${API_URL}?name=${query}`))
        } else {
            dispatch(callApi())
        }
	};

	return (
		<form className='row' onSubmit={hanldeOnSubmit}>
			<div className='col-10'>
				<input
					type='text'
					className='form-control'
					id='query'
					placeholder='Insert a character name'
					onChange={handleOnChange}
				/>
			</div>
			<div className='col-2'>
				<button type='submit' className='btn btn-dark mb-3'>
					Search
				</button>
			</div>
		</form>
	);
};
