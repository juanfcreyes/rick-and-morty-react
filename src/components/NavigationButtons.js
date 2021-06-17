import { useDispatch, useSelector } from "react-redux";
import { callApi } from "../store/appReducer";

export const NavigationButtons = () => {

    const { next, previous } = useSelector((state) => state.app);
    
    const dispatch = useDispatch();
	
	const handleOnNext = () => {
		dispatch(callApi(next));
	};

	const handleOnPrevious = () => {
		dispatch(callApi(previous));
	};

    return (
		<div className='container mt-4'>
			<div className='row justify-content-evenly'>
				<div className='col-6'>
					<button
						onClick={handleOnPrevious}
						disabled={!previous}
						className='btn btn-dark'>
						Previuos
					</button>
				</div>
				<div className='col-6'>
					<button onClick={handleOnNext} disabled={!next} className='btn btn-dark float-end'>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};
