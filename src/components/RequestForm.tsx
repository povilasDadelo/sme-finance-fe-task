import React from "react";
import styled from "styled-components";
import { Input } from "./Input";

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const RequestForm = () => {
  return (
    <div>
      <label htmlFor="comment">Comment</label>
      <Input type="textarea" id="comment" name="comment" />
    </div>
  );
};
