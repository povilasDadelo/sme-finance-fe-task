import { Form, Formik } from "formik";
import { Schema } from "yup";
import styled from "styled-components";
import { useGlobalStore } from "@/store/global.store";
import { FormData } from "@/store/global.store";
import { FormContainer } from "./FormContainer";

interface Props {
  title: string;
  component: React.ReactNode;
  validationSchema: Schema;
  currentStep: number;
  totalSteps: number;
  handleBack: () => void;
  handleNext: () => void;
}

const StyledForm = styled(Form)`
  width: 100%;
`;

export const EditForm = ({
  title,
  component,
  validationSchema,
  currentStep,
  totalSteps,
  handleBack,
  handleNext,
}: Props) => {
  const { formData, updateFormData } = useGlobalStore();

  const handleSubmit = (values: FormData) => {
    updateFormData(values);
    handleNext();
  };

  return (
    <Formik
      initialValues={formData}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <StyledForm>
        <FormContainer
          title={title}
          currentStep={currentStep}
          totalSteps={totalSteps}
          handleBack={handleBack}>
          {component}
        </FormContainer>
      </StyledForm>
    </Formik>
  );
};
