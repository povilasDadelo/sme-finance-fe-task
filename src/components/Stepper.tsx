import React from "react";
import styled from "styled-components";
import { useGlobalStore } from "../store/global.store";
import { ProgressIndicator } from "./ProgressIndicator";
import { EditForm } from "./EditForm";

interface StepperProps {
  steps: {
    title: string;
    component: React.ReactNode;
  }[];
}

const StepperContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StepperContent = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Stepper = ({ steps }: StepperProps) => {
  const { currentStep, setCurrentStep } = useGlobalStore();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <StepperContainer>
      <ProgressIndicator steps={steps} currentStep={currentStep} />
      <StepperContent>
        <EditForm
          title={steps[currentStep].title}
          component={steps[currentStep].component}
          totalSteps={steps.length}
          currentStep={currentStep}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      </StepperContent>
    </StepperContainer>
  );
};
