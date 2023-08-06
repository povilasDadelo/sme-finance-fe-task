import { useGlobalStore } from "@/store/global.store";
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
  margin-bottom: 10px;
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

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const FormContainer = ({
  children,
  currentStep,
  handleBack,
  title,
  totalSteps,
}: Props) => {
  const { readTerms } = useGlobalStore();

  return (
    <Container>
      <FormHeader>{title}</FormHeader>
      <FormBody>{children}</FormBody>
      <FormFooter>
        <Button type="button" onClick={handleBack} disabled={currentStep === 0}>
          Back
        </Button>
        {readTerms ? (
          <></>
        ) : (
          <Button type="submit" disabled={currentStep === totalSteps}>
            Next
          </Button>
        )}
      </FormFooter>
    </Container>
  );
};
