import { create } from "zustand";

export interface FormData {
  companyCode: string;
  companyName: string;
  country: string;
  name: string;
  surname: string;
  jobTitle: string;
  countryCode: string;
  phoneNumber: string;
  comment: string;
}

interface StoreState {
  currentStep: number;
  formData: FormData;
  setCurrentStep: (step: number) => void;
  updateFormData: (data: FormData) => void;
}

export const useGlobalStore = create<StoreState>((set) => ({
  currentStep: 0,
  formData: {
    companyCode: "",
    companyName: "",
    country: "",
    name: "",
    surname: "",
    jobTitle: "",
    countryCode: "",
    phoneNumber: "",
    comment: "",
    marketing: false,
    terms: false,
  },
  setCurrentStep: (step) => set({ currentStep: step }),
  updateFormData: (data) => set({ formData: data }),
}));
