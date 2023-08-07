import React from "react";
import { act, render, fireEvent, screen } from "@testing-library/react";
import { Formik } from "formik";
import { PhoneInput } from "@/components/molecules/PhoneInput";

describe("PhoneInput Component", () => {
  it("renders phone input fields with default values", async () => {
    render(
      <Formik
        initialValues={{ countryCode: "", phoneNumber: "" }}
        onSubmit={() => {}}>
        <PhoneInput />
      </Formik>
    );

    const labelElement = screen.getByText("Phone");
    expect(labelElement).toBeInTheDocument();

    const countryCodeSelect = screen.getByTestId("countryCode");
    const phoneNumberInput = screen.getByTestId("phoneNumber");

    expect(countryCodeSelect).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();

    expect(countryCodeSelect).toHaveValue("");
    expect(phoneNumberInput).toHaveValue("");
  });

  it("updates country code and phone number correctly", async () => {
    render(
      <Formik
        initialValues={{ countryCode: "", phoneNumber: "" }}
        onSubmit={() => {}}>
        <PhoneInput />
      </Formik>
    );

    await act(async () => {
      const countryCodeSelect = screen.getByTestId("countryCode");
      const phoneNumberInput = screen.getByTestId("phoneNumber");

      fireEvent.change(countryCodeSelect, { target: { value: "+371" } });
      fireEvent.change(phoneNumberInput, { target: { value: "12345678" } });

      expect(countryCodeSelect).toHaveValue("+371");
      expect(phoneNumberInput).toHaveValue("12345678");
    });
  });
});
