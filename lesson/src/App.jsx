import React, { useState } from "react";

const App = () => {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    // value=e.target.value
    const { value, name } = e.target;

    setformData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "username doldurulmalidir";
    }
    if (!formData.email) {
      newErrors.email = "email doldurulmalidir";
    }
    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "duzgun email daxil edin";
    }
    if (!formData.password) {
      newErrors.password = "password doldurulmalidir";
    }
    if (formData.password.length < 6) {
      newErrors.password = "şifrə minimum 6 olmalıdır";
    }
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const validatErrors = validate();
    if (Object.keys(validatErrors).length > 0) {
      setErrors(validatErrors);
      return;
    }
    console.log(formData);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} action="">
      <input
        type="text"
        placeholder="username"
        value={formData.username}
        name="username"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      {errors.username && <p className="text-red-500">{errors.username}</p>}
      <input
        type="email"
        placeholder="email"
        value={formData.email}
        name="email"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        name="password"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}
      <button type="submit">send</button>
    </form>
  );
};

export default App;
