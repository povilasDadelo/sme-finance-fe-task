import React from "react";
import { Input } from "./Input"; // Import the Input component
import { SelectInput } from "./SelectInput"; // Import the SelectInput component

export const CompanyForm = () => {
  const countryOptions = [
    { value: "lt", label: "Lithuania" },
    { value: "es", label: "Spain" },
  ];

  return (
    <div>
      <Input label="Company Code" id="companyCode" name="companyCode" />
      <Input label="Company Name" id="companyName" name="companyName" />
      <SelectInput
        label="Country"
        id="country"
        name="country"
        options={countryOptions}
      />
    </div>
  );
};
