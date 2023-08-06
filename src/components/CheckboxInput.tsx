import React from "react";
import styled from "styled-components";
import { Field, FieldProps } from "formik";

interface CheckboxInputProps {
  label: string;
  name: string;
}

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;

export const CheckboxInput = ({ label, name }: CheckboxInputProps) => {
  return (
    <Field type="checkbox" name={name}>
      {({ field }: FieldProps) => (
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
      )}
    </Field>
  );
};
