import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	active: null,
    data: [],
	status: "idle",
	error: null,
    next: null,
    previous: null,
    pokemonsDetails: []
};

export const callApi = createAsyncThunk("app/callApi", async () => {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon");
	const body = await response.json();
	return body;
});

export const getPokemon =  createAsyncThunk("app/getDetails", async (url) => {
	const response = await fetch(url);
	const body = await response.json();
	return {body, url};
});

const appSlider = createSlice({
	initialState,
	name: "app",
	reducers: {
		setActive(state, action) {
			state.active = action.payload;
		},
	},
	extraReducers: {
		[callApi.pending]: (state) => {
			state.status = "loading";
		},
		[callApi.fulfilled]: (state, action) => {
			state.status = "succeeded";
            const { results, next, previous } = action.payload;
            state.data = results;
            state.next = next;
            state.previous = previous;
		},
		[callApi.rejected]: (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		},
        [getPokemon.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.pokemonsDetails.push(action.payload);
        }
	},
});

export const { setActive } = appSlider.actions;

export const appReducer = appSlider.reducer;
