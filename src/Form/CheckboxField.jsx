// A component for rendering a checkbox field.
import React from "react";

const CheckboxField = ({ label, name, checked, onChange }) => {
  return (
    <div className="form-group">
      <label>
        <input name={name} checked={checked} onChange={onChange} />
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
