import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  secondary?: boolean;
}

const primaryButtonStyles = css`
  background-color: #007bff;
  color: white;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const secondaryButtonStyles = css`
  background-color: white;
  color: #007bff;
  border: 1px solid #007bff;

  &:disabled {
    background-color: white;
    color: #ccc;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button<{ $secondary?: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  ${({ $secondary }) =>
    $secondary ? secondaryButtonStyles : primaryButtonStyles}
`;

export const Button = ({
  children,
  onClick,
  disabled,
  type,
  secondary = false,
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      $secondary={secondary}>
      {children}
    </StyledButton>
  );
};
