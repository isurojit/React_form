// A component for rendering a single form field.
import React from "react";

const FormField = ({ label, type, id, name, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default FormField;
