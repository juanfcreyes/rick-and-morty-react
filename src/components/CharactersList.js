import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";

export const CharacterList = () => {
	const { data: characters } = useSelector((state) => state.app);

    return useMemo(
		() => (
			<div className='row list-container'>
				{characters.map((character) => (
					<div className='col-4' key={character.id}>
						{<Card key={character.id} id={character.id}></Card>}
					</div>
				))}
			</div>
		),
		[characters],
	);
};
