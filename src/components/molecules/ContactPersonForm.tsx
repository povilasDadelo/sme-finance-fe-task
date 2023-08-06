import React from "react";
import styled from "styled-components";
import { Input } from "../atoms/Input";
import { PhoneInput } from "./PhoneInput";
import { CheckboxInput } from "../atoms/CheckboxInput";

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContactPersonForm = () => {
  return (
    <div>
      <Input label="Name" id="name" name="name" />
      <Input label="Surname" id="surname" name="surname" />
      <Input label="Job Title" id="jobTitle" name="jobTitle" />
      <PhoneInput />
      <CheckboxContainer>
        <CheckboxInput label="Marketing emails" name="marketing" />
        <CheckboxInput label="Terms and conditions" name="terms" />
      </CheckboxContainer>
    </div>
  );
};
