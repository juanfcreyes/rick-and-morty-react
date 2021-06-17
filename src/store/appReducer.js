import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { POKEMON_URL } from "../data/constants";

const initialState = {
    active: null,
    data: [],
    status: "idle",
    error: null,
    next: null,
    previous: null,
    pokemonsDetails: {}
};

export const callApi = createAsyncThunk("app/callApi", async (url = POKEMON_URL) => {
    const response = await fetch(url);
    const body = await response.json();
    return body;
});

export const getPokemon = createAsyncThunk("app/getDetails", async (url) => {
    const response = await fetch(url);
    const body = await response.json();
    return { body, url };
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
            state.pokemonsDetails = {};
            state.data = results;
            state.next = next;
            state.previous = previous;
        },
        [callApi.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
        [getPokemon.fulfilled]: (state, action) => {
            const { url, body } = action.payload;
            state.pokemonsDetails[url] = {
                id: body.id,
                weight: body.weight,
                name: body.name,
                types: body.types.map((type) => type.type.name).toString()
            }
        }
    },
});

export const { setActive } = appSlider.actions;

export const appReducer = appSlider.reducer;
