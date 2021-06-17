import { useDispatch } from "react-redux";
import { callApi } from "../store/appReducer";
import { CharacterList } from "./CharactersList";
import { useEffect } from "react";
import { NavigationButtons } from "./NavigationButtons";
import { SearchBar } from "./SearchBar";

export const Home = () => {

	const dispatch = useDispatch();
    
    useEffect(() => {
		dispatch(callApi());
	}, [dispatch]);

	return (
		<div>
			<div className='row'>
				<div className='col-12'>
					<SearchBar></SearchBar>
					<CharacterList></CharacterList>
                    <NavigationButtons></NavigationButtons>
				</div>
			</div>
		</div>
	);
};
