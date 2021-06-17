import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import { API_URL } from "../data/constants";

const initialState = {
	active: null,
	data: [],
	status: "idle",
	error: null,
	next: null,
	previous: null,
	pokemonsDetails: {},
};

export const callApi = createAsyncThunk("app/callApi", async (url = API_URL) => {
    const response = await fetch(url);
	const body = await response.json();
	return body;
});

const appSlider = createSlice({
	initialState,
	name: "app",
	reducers: {
	},
	extraReducers: {
		[callApi.pending]: (state) => {
			state.status = "loading";
		},
		[callApi.fulfilled]: (state, action) => {
			state.status = "succeeded";
			const { results, info } = action.payload;
            console.log(action.payload);
			state.data = results.map((character) => ({
                id: character.id,
                name: character.name,
                status: character.status,
                gender: character.gender,
                type: character.type,
                origin: character.origin.name || ""
            }));
			state.next = info.next;
			state.previous = info.prev;
		},
		[callApi.rejected]: (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		}
	},
});

export const { setActive } = appSlider.actions;

const selectApp = (state) => state.app;
export const selectActive = createSelector(selectApp, (app) => app.active);

export const selectById = createSelector(
	[selectApp, (_, id) => id],
	(app, id) => app.data.find(character => character.id === id)
);

export const appReducer = appSlider.reducer;
