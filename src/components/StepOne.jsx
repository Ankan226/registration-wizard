function StepOne({ formData, updateField, onNext }) {
  const isValid =
    formData.firstName.trim().length > 0 &&
    formData.lastName.trim().length > 0 &&
    formData.dob.trim().length > 0;

  return (
    <div className="step">
      <h2>Personal Info</h2>

      <label>First Name</label>
      <input
        type="text"
        value={formData.firstName}
        onChange={(e) => updateField('firstName', e.target.value)}
        placeholder="Jane"
      />

      <label>Last Name</label>
      <input
        type="text"
        value={formData.lastName}
        onChange={(e) => updateField('lastName', e.target.value)}
        placeholder="Doe"
      />

      <label>Date of Birth</label>
      <input
        type="date"
        value={formData.dob}
        onChange={(e) => updateField('dob', e.target.value)}
      />

      <div className="button-row">
        <button
          type="button"
          disabled={!isValid}
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StepOne;