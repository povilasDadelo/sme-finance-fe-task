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
  marketing: boolean;
  terms: boolean;
}

interface StoreState {
  currentStep: number;
  readTerms: boolean;
  formData: FormData;
  setCurrentStep: (step: number) => void;
  updateFormData: (data: FormData) => void;
  setReadTerms: (data: boolean) => void;
}

export const useGlobalStore = create<StoreState>((set) => ({
  currentStep: 0,
  readTerms: false,
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
  setReadTerms: (data) => set({ readTerms: data }),
  updateFormData: (data) => set({ formData: data }),
}));
