// A component for rendering a dropdown field.
import React from "react";

const SelectField = ({ label, id, name, value, options, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <select id={id} value={value} name={name} onChange={onChange}>
        {/* Option will be taken as a form of array from parent component */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
