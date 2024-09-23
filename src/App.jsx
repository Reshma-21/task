import React from 'react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Login from './components/Login';

import { StepperProvider } from './components/stepper/StepperContext'; // Import the StepperProvider


const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <StepperProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="caliberCreate" element={<Create />}>
            
            </Route>
          </Routes>
        </StepperProvider>
      </BrowserRouter>

    </MantineProvider>

  
  );
};

export default App;
