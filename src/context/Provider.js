import React, {createContext, useReducer} from 'react';


export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  // const [authState, authDispatch] = useReducer(auth, authInitialState);
  // const [contactsState, contactsDispatch] = useReducer(
  //   contacts,
  //   contactsInitialState,
  // );

  return (
    <GlobalContext.Provider>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
