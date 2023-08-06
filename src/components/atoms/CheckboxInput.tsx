import React from "react";
import styled from "styled-components";
import { Field, FieldProps } from "formik";

interface CheckboxInputProps {
  label: string;
  name: string;
  clickableComponent?: React.ReactNode;
}

const Wrapper = styled.div`
  margin-bottom: 4px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
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

export const CheckboxInput = ({
  label,
  name,
  clickableComponent,
}: CheckboxInputProps) => {
  return (
    <Wrapper>
      <Field type="checkbox" name={name}>
        {({ field, form }: FieldProps) => (
          <>
            <Container>
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
              {clickableComponent}
            </Container>
            {form.touched[field.name] && form.errors[field.name] ? (
              <Error>{String(form.errors[field.name])}</Error>
            ) : null}
          </>
        )}
      </Field>
    </Wrapper>
  );
};
