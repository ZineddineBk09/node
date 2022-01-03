import React, { useContext, useReducer, createContext } from 'react'

//prepare the data layer
export const StateContext = createContext()

//Wrap our app and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

//Pull informations from data layer
export const useStateValue =()=> useContext(StateContext)
