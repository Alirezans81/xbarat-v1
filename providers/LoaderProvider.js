import React, { createContext, useContext, useState } from "react";

const LoaderContext = createContext();
const LoaderContextSetState = createContext();

const LoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);

  return (
    <LoaderContext.Provider value={loader}>
      <LoaderContextSetState.Provider value={setLoader}>
        {children}
      </LoaderContextSetState.Provider>
    </LoaderContext.Provider>
  );
};

const useLoaderState = () => {
  return useContext(LoaderContext);
};

const useLoaderSetState = () => {
  return useContext(LoaderContextSetState);
};

export { LoaderProvider, useLoaderState, useLoaderSetState };
