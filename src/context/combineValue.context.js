"use client";

import React, { createContext, useReducer } from "react";

const initialState = {
  componentsMargin: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MARGIN":
      const { component, margin } = action.payload;
      //checking component is available or not
      const existingComponentIndex = state.componentsMargin.findIndex(
        (item) => item.component === component
      );
      if (existingComponentIndex !== -1) {
        //available
        const updatedComponentsMargin = [...state.componentsMargin];
        updatedComponentsMargin[existingComponentIndex].margin = margin;
        return {
          ...state,
          componentsMargin: updatedComponentsMargin,
        };
      } else {
        //not available
        return {
          ...state,
          componentsMargin: [...state.componentsMargin, { component, margin }],
        };
      }

    case "COMBINE_MARGIN":
      // Find the maximum margin value
      const maxMargin = Math.max(
        ...state.componentsMargin.map((item) => parseFloat(item.margin))
      );

      // Update all margins with the maximum margin value
      const updatedComponentsMargin = state.componentsMargin.map((item) => ({
        ...item,
        margin: maxMargin.toString(),
      }));

      return {
        ...state,
        componentsMargin: updatedComponentsMargin,
      };

    default:
      return state;
  }
};

export const CombineValueContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const CombineValueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CombineValueContext.Provider value={{ state, dispatch }}>
      {children}
    </CombineValueContext.Provider>
  );
};
