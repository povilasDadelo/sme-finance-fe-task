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
  max-height: 200px;
  overflow-y: scroll;
`;

export const ContactPersonForm = () => {
  const { readTerms, setReadTerms } = useGlobalStore();

  if (readTerms) {
    return (
      <TermsContainer>
        Terms and text. Devon couldn't figure out the color of her eyes. He
        initially would have guessed that they were green, but the more he
        looked at them he almost wanted to say they were a golden yellow. Then
        there were the flashes of red and orange that seemed to be streaked
        throughout them. It was almost as if her eyes were made of opal with the
        sun constantly glinting off of them and bringing out more color. They
        were definitely the most unusual pair of eyes he'd ever seen.
      </TermsContainer>
    );
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
