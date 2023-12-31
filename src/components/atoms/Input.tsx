import React from "react";
import styled from "styled-components";
import { Field, FieldProps } from "formik";

interface InputProps {
  label?: string;
  id: string;
  name: string;
  type?: "text" | "textarea";
  testId?: string;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  color: #333;
`;

const InputStyled = styled.input`
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

const TextAreaStyled = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s, box-shadow 0.3s;
  font-size: 1rem;
  min-height: 80px;

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

const FormInput = ({
  field,
  form,
  type,
  id,
  testId,
}: FieldProps & { type: string; id: string; testId?: string }) => {
  const inputClass =
    form.touched[field.name] && form.errors[field.name]
      ? "error"
      : field.value
      ? "has-value"
      : "";

  return (
    <>
      {type === "textarea" ? (
        <TextAreaStyled
          id={id}
          {...field}
          className={inputClass}
          data-testid={testId}
        />
      ) : (
        <InputStyled
          id={id}
          {...field}
          className={inputClass}
          data-testid={testId}
        />
      )}
      {form.touched[field.name] && form.errors[field.name] ? (
        <Error>{String(form.errors[field.name])}</Error>
      ) : null}
    </>
  );
};

export const Input = ({
  id,
  label,
  name,
  type = "text",
  testId,
}: InputProps) => {
  return (
    <InputContainer>
      {label ? <Label htmlFor={id}>{label}</Label> : <></>}
      <Field type={type} name={name}>
        {(props: FieldProps) => (
          <FormInput id={id} type={type} testId={testId} {...props} />
        )}
      </Field>
    </InputContainer>
  );
};
