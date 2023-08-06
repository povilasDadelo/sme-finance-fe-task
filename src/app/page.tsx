"use client";

import { CompanyForm } from "@/components/CompanyForm";
import { ContactPersonForm } from "@/components/ContactPersonForm";
import { RequestForm } from "@/components/RequestForm";
import { Stepper } from "@/components/Stepper";

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
