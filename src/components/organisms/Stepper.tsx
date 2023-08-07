import React from "react";
import styled from "styled-components";
import { useGlobalStore } from "../../store/global.store";
import { ProgressIndicator } from "../atoms/ProgressIndicator";
import { EditForm } from "../molecules/EditForm";
import { Summary } from "../molecules/Summary";

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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StepperContent = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    width: 420px;
  }

  @media (max-width: 767px) {
    margin: 0 24px;
    width: calc(100% - 48px);
  }
`;

export const Stepper = ({ steps }: StepperProps) => {
  const { currentStep, readTerms, setCurrentStep, setReadTerms } =
    useGlobalStore();

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (readTerms) {
      setReadTerms(false);

      return;
    }

    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <StepperContainer data-testid="stepper-component">
      <ProgressIndicator steps={steps} currentStep={currentStep} />
      <StepperContent>
        {currentStep + 1 > steps.length ? (
          <Summary handleBack={handleBack} />
        ) : (
          <EditForm
            title={steps[currentStep].title}
            component={steps[currentStep].component}
            totalSteps={steps.length}
            currentStep={currentStep}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        )}
      </StepperContent>
    </StepperContainer>
  );
};
