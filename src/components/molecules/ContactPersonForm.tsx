import React from "react";
import styled from "styled-components";
import { Input } from "../atoms/Input";
import { PhoneInput } from "./PhoneInput";
import { CheckboxInput } from "../atoms/CheckboxInput";
import { ClickableText } from "../atoms/ClickableText";
import { useGlobalStore } from "@/store/global.store";

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TermsContainer = styled.div`
  min-height: 80px;
  overflow-y: scroll;
`;

export const ContactPersonForm = () => {
  const { readTerms, setReadTerms } = useGlobalStore();

  if (readTerms) {
    return <TermsContainer>Terms scrollable</TermsContainer>;
  }

  return (
    <div>
      <Input label="Name" id="name" name="name" />
      <Input label="Surname" id="surname" name="surname" />
      <Input label="Job Title" id="jobTitle" name="jobTitle" />
      <PhoneInput />
      <CheckboxContainer>
        <CheckboxInput label="Marketing emails" name="marketing" />
        <CheckboxInput
          label="Terms and conditions. "
          name="terms"
          clickableComponent={
            <ClickableText
              text="Read terms."
              onClick={() => setReadTerms(true)}
            />
          }
        />
      </CheckboxContainer>
    </div>
  );
};
