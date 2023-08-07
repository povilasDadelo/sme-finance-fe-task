import React from "react";
import styled from "styled-components";
import { Field, FieldProps } from "formik";

interface Props {
  label?: string;
  id: string;
  name: string;
  options: { value: string; label: string }[];
  right?: boolean;
  testId?: string;
}

interface FormSelectInputProps extends FieldProps {
  right?: boolean;
  id: string;
  testId?: string;
  options: { value: string; label: string }[];
}

const InputContainer = styled.div<{ $right?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-right: ${({ $right }) => ($right ? "5px" : "0px")};
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  color: #333;
`;

const SelectStyled = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s, box-shadow 0.3s;
  font-size: 1rem;
  height: 40px;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }

  &.has-value {
    border-color: #28a745;
  }

  &.error {
    border-color: #dc3545;
  }
`;

const Error = styled.div`
  font-size: 10px;
  color: red;
`;

const FormSelectInput = ({
  field,
  form,
  options,
  id,
  testId,
}: FormSelectInputProps) => {
  const selectClass =
    form.touched[field.name] && form.errors[field.name]
      ? "error"
      : field.value !== undefined && field.value !== ""
      ? "has-value"
      : "";

  return (
    <>
      <SelectStyled
        id={id}
        {...field}
        className={selectClass}
        data-testid={testId}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectStyled>
      {form.touched[field.name] && form.errors[field.name] ? (
        <Error>{String(form.errors[field.name])}</Error>
      ) : null}
    </>
  );
};

export const SelectInput = ({
  id,
  label,
  name,
  options,
  right,
  testId,
}: Props) => {
  return (
    <InputContainer $right={right}>
      {label ? <Label htmlFor={id}>{label}</Label> : <></>}
      <Field name={name}>
        {(props: FieldProps) => (
          <FormSelectInput
            id={id}
            testId={testId}
            options={options}
            {...props}
          />
        )}
      </Field>
    </InputContainer>
  );
};
