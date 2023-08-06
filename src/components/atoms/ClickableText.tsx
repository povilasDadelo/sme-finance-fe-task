import React from "react";
import styled from "styled-components";

interface ClickableTextProps {
  text: string;
  onClick: () => void;
}

const StyledClickableText = styled.a`
  cursor: pointer;
  color: blue;
  text-decoration: underline;
`;

export const ClickableText = ({ text, onClick }: ClickableTextProps) => {
  return <StyledClickableText onClick={onClick}>{text}</StyledClickableText>;
};
