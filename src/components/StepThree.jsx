function StepThree({ formData, onBack, onSubmit, submitted }) {
  if (submitted) {
    return (
      <div className="step success-screen">
        <h2>✅ Registration Successful</h2>
        <p>Your data has been captured. Check the console for the payload.</p>
      </div>
    );
  }

  return (
    <div className="step">
      <h2>Review & Submit</h2>

      <div className="summary">
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Date of Birth:</strong> {formData.dob}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Password:</strong> {'•'.repeat(formData.password.length)}</p>
      </div>

      <div className="button-row">
        <button type="button" className="secondary" onClick={onBack}>
          Back
        </button>
        <button type="button" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default StepThree;