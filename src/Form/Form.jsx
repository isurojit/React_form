import React from "react";
import FormField from "./FormField";
import SelectField from "./SelectField";
import CheckboxField from "./CheckboxField";

const Form = ({ formData, errors, onChange, onCheckboxChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="form">
      <FormField
        label="Name"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={onChange}
        error={errors.name}
      />
      <FormField
        label="Email"
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        error={errors.email}
      />
      <FormField
        label="Phone"
        type="text"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={onChange}
        error={errors.phone}
      />
      <FormField
        label="Password"
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={onChange}
        error={errors.password}
      />
      <FormField
        label="Confirm Password"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={onChange}
        error={errors.confirmPassword}
      />
      <FormField
        label="Address"
        type="textarea"
        id="address"
        name="address"
        value={formData.address}
        onChange={onChange}
      />
      <SelectField
        label="Degree"
        id="degree"
        name="degree"
        value={formData.degree}
        options={[
          { label: "Select Degree", value: "" },
          { label: "12 Boards", value: "boards" },
          { label: "Bachelors", value: "bachelors" },
          { label: "Masters", value: "masters" },
          { label: "PHD", value: "phd" },
        ]}
        onChange={onChange}
      />
      <CheckboxField
        label="Married"
        name="married"
        checked={formData.checked}
        onChange={onCheckboxChange}
      />

      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
