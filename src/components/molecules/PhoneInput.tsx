import React from "react";
import styled from "styled-components";
import { Input } from "../atoms/Input";
import { SelectInput } from "../atoms/SelectInput";

const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  color: #333;
`;

const PhoneInputContainer = styled.div`
  display: flex;
  align-items: baseline;
  padding: 0.2rem;
`;

const countryCodes = [
  { value: "+370", label: "+370" },
  { value: "+371", label: "+371" },
  // Add more country codes
];

export const PhoneInput = () => {
  return (
    <InputContainer>
      <Label>Phone</Label>
      <PhoneInputContainer>
        <SelectInput
          right
          id="countryCode"
          name="countryCode"
          options={countryCodes}
        />
        <Input id="phoneNumber" name="phoneNumber" />
      </PhoneInputContainer>
    </InputContainer>
  );
};
