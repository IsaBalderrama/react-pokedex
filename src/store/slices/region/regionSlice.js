/* eslint-disable */ 
import { createSlice } from '@reduxjs/toolkit';

export const regionSlice = createSlice({
    name: 'region',
    initialState: {
        regions: [],
        isLoading: false
    },
    reducers: {
        startLoadingRegions: (state) => {
            state.startLoadingRegions = true;
        },

        setRegion: (state, action) => {
            state.isLoading = false;
            state.regions = action.payload.regions;
        },
    },
});

export const { startLoadingRegions, setRegion } = regionSlice.actions;