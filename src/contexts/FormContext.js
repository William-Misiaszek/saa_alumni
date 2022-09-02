import React, { useReducer, createContext } from 'react';

const initialFormState = {
  travelersData: [],
};

export const FormContext = createContext(initialFormState);

function formReducer(state, action) {
  switch (action.type) {
    case 'addTraveler':
      return {
        travelersData: [...state.travelersData, action.payload],
      };
    case 'removeTraveler':
      return {
        travelersData: state.travelersData.filter(
          (traveler) => traveler.su_did !== action.payload
        ),
      };
    default:
      return state;
  }
}

export const FormContextProvider = (props) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const { children } = props;
  return (
    <FormContext.Provider value={[state, dispatch]}>
      {children}
    </FormContext.Provider>
  );
};