function ProgressBar({ currentStep, totalSteps }) {
  const percent = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-wrapper">
      <p className="progress-label">Step {currentStep} of {totalSteps}</p>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;