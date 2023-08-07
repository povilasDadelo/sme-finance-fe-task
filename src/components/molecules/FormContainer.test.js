import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import { FormContainer } from "@/components/molecules/FormContainer";

describe("FormContainer Component", () => {
  it("renders Back and Next buttons correctly", () => {
    const handleBack = jest.fn();
    const { getByText } = render(
      <FormContainer
        title="Test Form"
        currentStep={1}
        totalSteps={3}
        handleBack={handleBack}>
        <div>Mock Form Component</div>
      </FormContainer>
    );

    const backButton = getByText("Back");
    const nextButton = getByText("Next");

    expect(backButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
});
