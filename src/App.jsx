import { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import './App.css';

const TOTAL_STEPS = 3;

function App() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goNext = () => setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
  const goBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    console.log('Final Registration Payload:', formData);
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <h1 className="page-title">Create Your Account</h1>
      <div className="wizard-card">
        <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />

        {step === 1 && (
          <StepOne formData={formData} updateField={updateField} onNext={goNext} />
        )}

        {step === 2 && (
          <StepTwo
            formData={formData}
            updateField={updateField}
            onNext={goNext}
            onBack={goBack}
          />
        )}

        {step === 3 && (
          <StepThree
            formData={formData}
            onBack={goBack}
            onSubmit={handleSubmit}
            submitted={submitted}
          />
        )}
      </div>
    </div>
  );
}

export default App;