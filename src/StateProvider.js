import React, { useContext, useReducer, createContext } from "react";

//Data Layer, helps pull and push data/info throut all the components
export const StateContext = createContext();

//StateProvider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Reducer: where listening happens handles the actions

//access info from tha data layer , sueContext:ab some info from data layer
export const useStateValue = () => useContext(StateContext);
