import * as Yup from "yup";

export const companyValidationSchema = Yup.object({
  companyCode: Yup.string().required("Company code is required"),
  companyName: Yup.string().required("Company name is required"),
  country: Yup.string().required("Country is required"),
});

export const personValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  surname: Yup.string().required("Surname is required"),
  jobTitle: Yup.string().required("Job title is required"),
  countryCode: Yup.string().required("Country code is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  marketing: Yup.boolean().oneOf([true], "You must agree to marketing terms"),
  terms: Yup.boolean().oneOf([true], "You must agree to terms and conditions"),
});

export const requestValidationSchema = Yup.object({
  comment: Yup.string().required("Request comment is required"),
});
