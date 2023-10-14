import React, { useState, useEffect } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      // Validation logic
      const newErrors = {};
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is not valid';
      }
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }

      setErrors(newErrors);
      setIsSubmitting(false);

      // If there are no errors, you can submit the form
      if (Object.keys(newErrors).length === 0) {
        // Perform registration logic here
        console.log('Form submitted with data:', formData);
      }
    }
  }, [formData, isSubmitting]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return (
    <div className='registerf'>
      <h1>Fill this form for Registration</h1> 
      <form onSubmit={handleSubmit}>
        <div className='l1'>
          <label >Name</label><br />
          <input placeholder='Enter Your Full Name'
            type="text"   id="name" name="name"    value={formData.name}  onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className='l2'>
          <label >Email</label><br />
          <input placeholder='Enter Your Email'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className='l3'>
          <label >Password</label><br />
          <input placeholder='Enter your Password'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className='l4'>
          <label >Confirm Password</label><br />
          <input placeholder='Enter Password again'
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
