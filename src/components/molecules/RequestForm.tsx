import React from "react";
import { Input } from "../atoms/Input";

export const RequestForm = () => {
  return (
    <div>
      <label htmlFor="comment">Comment</label>
      <Input type="textarea" id="comment" name="comment" />
    </div>
  );
};
