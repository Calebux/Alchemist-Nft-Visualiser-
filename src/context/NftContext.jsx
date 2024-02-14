/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const NftContext = createContext();

const initialState = {
  currentNft: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "new-nft":
      return {
        ...state,
        currentNft: action.payload,
      };
    default:
      throw new Error("Action Unknown");
  }
}

const NftProvider = ({ children }) => {
  const [{ currentNft }, dispatch] = useReducer(reducer, initialState);

  return (
    <NftContext.Provider
      value={{
        currentNft,
        dispatch,
      }}
    >
      {children}
    </NftContext.Provider>
  );
};

function useNft() {
  const context = useContext(NftContext);
  if (context === undefined)
    throw new Error("Context was read outside the provider scope");

  return context;
}

export { NftProvider, useNft };
