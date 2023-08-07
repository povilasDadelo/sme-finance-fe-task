import { useGlobalStore } from "@/store/global.store";
import { ReactNode } from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";

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
  width: 100%;
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
        <Button
          type="button"
          secondary
          onClick={handleBack}
          disabled={currentStep === 0}>
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
