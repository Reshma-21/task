import React, { createContext, useContext, useState } from 'react';

const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <StepperContext.Provider value={{ activeStep, setActiveStep }}>
      {children}
    </StepperContext.Provider>
  );
};

export const useStepper = () => useContext(StepperContext);
