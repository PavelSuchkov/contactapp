import React, { useContext, useState } from 'react';
import { LoginComponent } from '../../components/Login/LoginComponent';
import { GlobalContext } from '../../context/Provider';
import { loginUser } from '../../context/auth/loginUser';

export const Login = () => {


  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: { error, loading },
  } = useContext(GlobalContext);


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
        } else if (value.length >= 6){
          setErrors(prev => {
            return { ...prev, [name]: null };
          });
        }
      }
    } else setErrors(prev => {
      return { ...prev, [name]: 'This field is required' };
    });
  };
  const onSubmit = () => {
    if (form.username && form.password) {
      loginUser(form)(authDispatch)((response) => console.log('success,', response))
  }}

  return (
    <LoginComponent onSubmit={onSubmit}
                    onChange={onChange}
                    form={form}
                    errors={errors}
                    error={error}
                    loading={loading}
    />
  );
};
