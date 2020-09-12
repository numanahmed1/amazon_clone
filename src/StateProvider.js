import React, { createContext, useContext, useReducer } from "react";

// Prepars the dataLayer
export const StateContext = createContext();

// Wrap Our app and provide the data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// Pull the information from the dataLayer
export const useStateValue = () => useContext(StateContext);
