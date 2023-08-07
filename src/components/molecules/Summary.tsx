import React from "react";
import styled from "styled-components";
import { useGlobalStore } from "@/store/global.store";
import { Button } from "../atoms/Button";

interface SummaryProps {
  handleBack: () => void;
}

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const SummaryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SummaryBody = styled.div`
  width: 100%;
`;

const SummaryFooter = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const Value = styled.span`
  color: #333;
`;

export const Summary = ({ handleBack }: SummaryProps) => {
  const { formData } = useGlobalStore();

  return (
    <SummaryContainer>
      <SummaryTitle>Summary</SummaryTitle>
      <SummaryBody>
        {Object.entries(formData).map(([key, value]) => (
          <SummaryItem key={key}>
            <Label>{key}:</Label>
            <Value>{String(value)}</Value>
          </SummaryItem>
        ))}
      </SummaryBody>
      <SummaryFooter>
        <Button secondary onClick={handleBack}>
          Back
        </Button>
      </SummaryFooter>
    </SummaryContainer>
  );
};
