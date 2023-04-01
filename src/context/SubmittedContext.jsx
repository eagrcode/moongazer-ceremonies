import { createContext, useContext, useState } from "react";

export const SubmittedContext = createContext({});
export const useSubmitted = () => useContext(SubmittedContext);

export const SubmittedProvider = ({ children }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.log(isSubmitted);

  return (
    <SubmittedContext.Provider value={{ isSubmitted, setIsSubmitted }}>
      {children}
    </SubmittedContext.Provider>
  );
};
