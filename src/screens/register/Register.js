import React, { useEffect, useState } from "react";
import { RegisterComponent } from '../../components/signup/RegisterComponent';
import axiosInstance from "../../helpers/axiosInterceptor";

export const Register = () => {

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  console.log('form ===> ', form);

  useEffect(() => {
    axiosInstance.post('/contacts').catch(err => {
      console.log(err);
    })
  }, [])

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    if (value) {
      setErrors(prev => {
        return { ...prev, [name]: null };
      });
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return { ...prev, [name]: 'Minimum is 6 characters' };
          });
        }
      }
    }
    else setErrors(prev => {
      return { ...prev, [name]: 'This field is required' };
    });
  };

  const onSubmit = () => {
    console.log(form);

    if (!form.username) {
      setErrors(prev => {
        return { ...prev, username: 'Please enter username' };
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return { ...prev, firstName: 'Please enter firstName' };
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return { ...prev, lastName: 'Please enter lastName' };
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return { ...prev, email: 'Please enter email' };
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return { ...prev, password: 'Please enter password' };
      });
    }
  };


  return (

    <RegisterComponent onSubmit={onSubmit}
                       onChange={onChange}
                       form={form}
                       errors={errors} />
  );
};
