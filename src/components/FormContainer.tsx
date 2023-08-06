import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  title: string;
  currentStep: number;
  totalSteps: number;
  handleBack: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormHeader = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FormBody = styled.div`
  width: 100%;
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const FormContainer = ({
  children,
  currentStep,
  handleBack,
  title,
  totalSteps,
}: Props) => {
  return (
    <Container>
      <FormHeader>{title}</FormHeader>
      <FormBody>{children}</FormBody>
      <FormFooter>
        <Button onClick={handleBack} disabled={currentStep === 0}>
          Back
        </Button>
        <Button type="submit" disabled={currentStep === totalSteps - 1}>
          Next
        </Button>
      </FormFooter>
    </Container>
  );
};
