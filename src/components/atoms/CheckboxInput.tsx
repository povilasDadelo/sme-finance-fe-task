import React from "react";
import styled from "styled-components";
import { Field, FieldProps } from "formik";

interface CheckboxInputProps {
  label: string;
  name: string;
}

const Container = styled.div`
  margin-bottom: 4px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Error = styled.div`
  font-size: 10px;
  color: red;
`;

export const CheckboxInput = ({ label, name }: CheckboxInputProps) => {
  return (
    <Container>
      <Field type="checkbox" name={name}>
        {({ field, form }: FieldProps) => (
          <>
            <CheckboxLabel>
              <input
                type="checkbox"
                {...field}
                checked={field.value}
                onChange={() =>
                  field.onChange({
                    target: { name: field.name, value: !field.value },
                  })
                }
              />
              {label}
            </CheckboxLabel>
            {form.touched[field.name] && form.errors[field.name] ? (
              <Error>{String(form.errors[field.name])}</Error>
            ) : null}
          </>
        )}
      </Field>
    </Container>
  );
};
