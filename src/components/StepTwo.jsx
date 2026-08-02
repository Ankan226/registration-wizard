import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function StepTwo({ formData, updateField, onNext, onBack }) {
  const [showPassword, setShowPassword] = useState(false);

  const emailValid = EMAIL_REGEX.test(formData.email);
  const passwordValid = formData.password.length >= 8;
  const confirmValid =
    formData.confirmPassword.length > 0 &&
    formData.confirmPassword === formData.password;

  const isValid = emailValid && passwordValid && confirmValid;

  return (
    <div className="step">
      <h2>Account Details</h2>

      <label>Email</label>
      <input
        type="text"
        value={formData.email}
        onChange={(e) => updateField('email', e.target.value)}
        placeholder="jane@example.com"
      />
      {formData.email.length > 0 && !emailValid && (
        <p className="error-text">Please enter a valid email address.</p>
      )}

      <label>Password</label>
      <div className="password-wrapper">
        <input
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={(e) => updateField('password', e.target.value)}
          placeholder="Minimum 8 characters"
        />
        <button
          type="button"
          className="eye-toggle"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      {formData.password.length > 0 && !passwordValid && (
        <p className="error-text">Password must be at least 8 characters.</p>
      )}

      <label>Confirm Password</label>
      <input
        type={showPassword ? 'text' : 'password'}
        value={formData.confirmPassword}
        onChange={(e) => updateField('confirmPassword', e.target.value)}
        placeholder="Re-enter password"
      />
      {formData.confirmPassword.length > 0 && !confirmValid && (
        <p className="error-text">Passwords do not match.</p>
      )}

      <div className="button-row">
        <button type="button" className="secondary" onClick={onBack}>
          Back
        </button>
        <button type="button" disabled={!isValid} onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StepTwo;