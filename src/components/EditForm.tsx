import { useGlobalStore } from "@/store/global.store";
import { Form, Formik } from "formik";
import { FormData } from "@/store/global.store";
import { FormContainer } from "./FormContainer";

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
    <Formik initialValues={formData} onSubmit={handleSubmit}>
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
