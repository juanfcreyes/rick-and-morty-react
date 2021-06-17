import { useSelector } from "react-redux";
import { IMAGE_URL } from "../data/constants";
import { selectById } from "../store/appReducer";
import { CharacterStatus } from "./CharacterStatus";

export const Card = ({ id }) => {
	const character = useSelector((state) => selectById(state, id));

	return (
		<div className='card mb-4 '>
			<div className='row'>
				<div className='col-4'>
					<img
						width='130px'
                        height='200px'
						src={`${IMAGE_URL}${character.id}.jpeg`}
						alt={character.name}
					></img>
				</div>
				<div className='col-8'>
					<p>
						<strong>{character.name}</strong>
					</p>
					<p>
						<strong> Gender: </strong> {character.gender}
					</p>

					<p>
						<strong> Origin: </strong> {character.origin}
					</p>
					<div className='row'>
						<div className='col-6 '>
							<strong> Type: </strong> {character.type}
						</div>
						<div className='col-6'>
							<CharacterStatus status={character.status}></CharacterStatus>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
