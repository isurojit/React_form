import React, { useState } from "react";
import Form from "./Form/Form";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    degree: "",
    married: false,
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form SucessFully Submited.");
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = "Name  is Required.";
    }
    if (!data.email.trim()) {
      errors.email = "Email is Required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Invalid email Address.";
    }
    if (!data.password.trim()) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = "Password should be at least 8 characters.";
    } else if (!data.password.match(/[a-z]/)) {
      errors.password =
        "Password should have at least one lowercase character.";
    } else if (!data.password.match(/[A-Z]/)) {
      errors.password =
        "Password should have at least one uppercase character.";
    } else if (!data.password.match(/[0-9]/)) {
      errors.password = "Password should have at least one number.";
    }
    if (data.confirmPassword.trim() !== data.password.trim()) {
      errors.confirmPassword = "Password do not match.";
    }
    if (!data.phone.trim()) {
      errors.phone = "Phone number required.";
    }
    return errors;
  };

  return (
    <div className="form-container">
      <Form
        formData={formData}
        errors={errors}
        onChange={handleChange}
        onCheckboxChange={handleCheckboxChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default FormComponent;
