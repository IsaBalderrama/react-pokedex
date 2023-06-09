/* eslint-disable */ 

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'

export const PokemonRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <HomePage/> }/>

        <Route path="/*" element={ <Navigate to="/"/> }/>
    </Routes>
  )
}
