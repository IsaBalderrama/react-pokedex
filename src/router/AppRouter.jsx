/* eslint-disable */ 
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { PokemonRoutes } from '../pokemons/routes/PokemonRoutes';

export const AppRouter = () => {
  return (
    <Routes>

        <Route path="/auth/*" element={ <AuthRoutes/> } />

        <Route path="/*" element={ <PokemonRoutes/> }/>

    </Routes>
  )
}
