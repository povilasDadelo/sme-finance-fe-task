"use client";

import { CompanyForm } from "@/components/molecules/CompanyForm";
import { ContactPersonForm } from "@/components/molecules/ContactPersonForm";
import { RequestForm } from "@/components/molecules/RequestForm";
import { Stepper } from "@/components/organisms/Stepper";

export default function Home() {
  const steps = [
    {
      title: "Company",
      component: <CompanyForm />,
    },
    {
      title: "Contact Person",
      component: <ContactPersonForm />,
    },
    {
      title: "Request",
      component: <RequestForm />,
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
