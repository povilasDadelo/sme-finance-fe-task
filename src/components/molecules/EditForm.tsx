import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useGlobalStore } from "@/store/global.store";
import { FormData } from "@/store/global.store";
import { FormContainer } from "./FormContainer";
import {
  companyValidationSchema,
  personValidationSchema,
  requestValidationSchema,
} from "@/validation/formValidationSchema";

interface Props {
  title: string;
  component: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  handleBack: () => void;
  handleNext: () => void;
}

export const EditForm = ({
  title,
  component,
  currentStep,
  totalSteps,
  handleBack,
  handleNext,
}: Props) => {
  const { formData, updateFormData } = useGlobalStore();

  const handleSubmit = async (values: FormData) => {
    updateFormData(values);
    handleNext();
  };

  return (
    <Formik
      initialValues={formData}
      onSubmit={handleSubmit}
      validationSchema={(() => {
        switch (currentStep) {
          case 0:
            return companyValidationSchema;
          case 1:
            return personValidationSchema;
          case 2:
            return requestValidationSchema;
          default:
            return Yup.object({});
        }
      })()}>
      <Form>
        <FormContainer
          title={title}
          currentStep={currentStep}
          totalSteps={totalSteps}
          handleBack={handleBack}>
          {component}
        </FormContainer>
      </Form>
    </Formik>
  );
};
