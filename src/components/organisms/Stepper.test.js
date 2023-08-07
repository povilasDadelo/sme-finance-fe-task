import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useGlobalStore } from "@/store/global.store";
import { Stepper } from "@/components/organisms/Stepper";
import { CompanyForm } from "@/components/molecules/CompanyForm";
import { ContactPersonForm } from "@/components/molecules/ContactPersonForm";

describe("Stepper Component", () => {
  it("renders without errors", () => {
    render(<Stepper steps={[]} />);

    const stepperComponent = screen.getByTestId("stepper-component");

    expect(stepperComponent).toBeInTheDocument();
  });

  it("updates currentStep when 'Next' button is clicked", async () => {
    const steps = [
      {
        title: "Company",
        component: <CompanyForm />,
      },
      {
        title: "Contact Person",
        component: <ContactPersonForm />,
      },
    ];

    const { getByText, getByLabelText } = render(<Stepper steps={steps} />);
    const nextButton = getByText("Next");

    // Fill out the form fields
    const companyCodeInput = getByLabelText("Company Code");
    const companyNameInput = getByLabelText("Company Name");
    const countrySelect = getByLabelText("Country");

    fireEvent.change(companyCodeInput, { target: { value: "ABC123" } });
    fireEvent.change(companyNameInput, {
      target: { value: "Example Company" },
    });
    fireEvent.change(countrySelect, { target: { value: "lt" } });

    fireEvent.click(nextButton);

    await waitFor(() => {
      const currentStep = useGlobalStore.getState().currentStep;

      expect(currentStep).toBe(1);
    });
  });
});
