import React from 'react';
import './css/inputField.css';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
