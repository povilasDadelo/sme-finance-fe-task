import React from "react";
import styled from "styled-components";

interface Step {
  title: string;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
}

const Container = styled.div`
  position: absolute;
  left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: transparent;
`;

const StepText = styled.div<{ $completed?: boolean; $current?: boolean }>`
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  color: ${({ $completed, $current }) =>
    $current ? "#000" : $completed ? "#007bff" : "#7f7f7f"};
  border-left: 3px solid
    ${({ $completed, $current }) =>
      $current ? "#000" : $completed ? "#007bff" : "#7f7f7f"};
  padding-left: 8px;
  display: flex;
  align-items: center;
`;

const Step = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 0.5rem;
  color: white;
`;

const StepPercentage = styled.div`
  font-size: 0.8rem;
  color: #007bff;
  margin-bottom: 0.5rem;
`;

export const ProgressIndicator = ({
  steps,
  currentStep,
}: ProgressIndicatorProps) => {
  const progressPercentage = (currentStep / steps.length) * 100;

  return (
    <Container>
      <StepPercentage>{`${progressPercentage.toFixed(0)}%`}</StepPercentage>
      {steps.map((step, index) => (
        <StepText
          key={`s-${index}`}
          $current={currentStep === index}
          $completed={index <= currentStep}>
          {step.title}
        </StepText>
      ))}
    </Container>
  );
};
