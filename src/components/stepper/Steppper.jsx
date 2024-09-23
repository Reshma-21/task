
import React from 'react';
import { Stepper, Text, Space } from '@mantine/core';
import InputDocs from '../stepperScreens/InputDocs';
import ProductCard from '../stepperScreens/Product/ProductCard';
import TestDetails from '../stepperScreens/Test/TestDetails';
import TestPlan from '../stepperScreens/Test/TestPlan';
import DataTable from '../common/DataTable';
import WorkSheets from '../stepperScreens/WorkSheets';
import './stepper.css';
import { useStepper } from '../stepper/StepperContext';

function Steppper() {
  const labels = ['Input Docs', 'Work sheets', 'Tests', 'Test Plan', 'Export'];
  const { activeStep, setActiveStep } = useStepper();

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <InputDocs />;
      case 1:
        return <WorkSheets />;
      case 2:
        return <TestDetails />;
      case 3:
        return <TestPlan />;
      case 4:
        return <DataTable />;
      default:
        return <InputDocs />; // Default case if no match is found
    }
  };

  return (
    <div>
      <Stepper active={activeStep} onStepClick={setActiveStep} color="navy" classNames={{ step: 'custom-step' }} size="xs">
        {labels.map((label, index) => (
          <Stepper.Step
            key={index}
            className="step"/>
        ))}
      </Stepper>

      <div className="step-labels">
        {labels.map((label, index) => (
          <Text
            key={index}
            className={`step-label ${index === activeStep ? 'active-label' : ''}`}
            style={{
              color: 
                index === activeStep ? 'navy' : 
                index < activeStep ? 'green' : '#666',  
            }}
          >
            {label}
          </Text>
        ))}
      </div>
      <Space h="xl" />
      <div className="step-content">
        {renderStepContent()}
      </div>
    </div>
  );
}

export default Steppper;
