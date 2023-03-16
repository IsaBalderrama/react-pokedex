/* eslint-disable */ 
import { pokemonApi } from "../../../api/pokemonApi";
import { setRegion, startLoadingRegions } from "./regionSlice"


export const getRegions = () => {
    return async ( dispatch, getState ) => {
        dispatch( startLoadingRegions() );

        const { data } = await pokemonApi.get('/pokedex');


        dispatch( setRegion({ regions: data.results }) );
    }
}