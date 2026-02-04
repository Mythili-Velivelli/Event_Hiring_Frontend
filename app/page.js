"use client";
import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour"

export default function Home() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "",
    date: "",
    location: "",
    venue: "",
    hireType: ""
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-md mx-auto bg-blue-50 p-6 border rounded-xl">
      {step === 1 && (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <StepTwo
          hireType={formData.hireType}
          setFormData={setFormData}
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <StepThree
          formData={formData}
          setFormData={setFormData}
          onNext={() => setStep(4)}
          onBack={() => setStep(2)}
        />
      )}

      {step == 4 && (
        <StepFour
          formData={formData}
          onBack={() => setStep(3)}
        />
      )}
      </div>
    </div>
  );
}
