"use client";

import { CompanyForm } from "@/components/molecules/CompanyForm";
import { ContactPersonForm } from "@/components/molecules/ContactPersonForm";
import { RequestForm } from "@/components/molecules/RequestForm";
import { Stepper } from "@/components/organisms/Stepper";
import {
  companyValidationSchema,
  personValidationSchema,
  requestValidationSchema,
} from "@/validation/formValidationSchema";

export default function Home() {
  const steps = [
    {
      title: "Company",
      component: <CompanyForm />,
      validationSchema: companyValidationSchema,
    },
    {
      title: "Contact Person",
      component: <ContactPersonForm />,
      validationSchema: personValidationSchema,
    },
    {
      title: "Request",
      component: <RequestForm />,
      validationSchema: requestValidationSchema,
    },
  ];

  return (
    <main>
      <div>
        <Stepper steps={steps} />
      </div>
    </main>
  );
}
