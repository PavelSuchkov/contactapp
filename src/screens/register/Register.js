import React, { useCallback, useContext, useEffect, useState } from 'react';
import { RegisterComponent } from '../../components/signup/RegisterComponent';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../../context/Provider';
import {register, clearAuthState}  from '../../context/auth/register';
import { LOGIN } from '../../constants/routeNames';

export const Register = () => {

  const [form, setForm] = useState({});
  const { navigate } = useNavigation();
  const [errors, setErrors] = useState({});
  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (data) {
      navigate(LOGIN);
    }
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data || error]),
  );

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
    } else setErrors(prev => {
      return { ...prev, [name]: 'This field is required' };
    });
  };

  const onSubmit = () => {
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
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      register(form)(authDispatch)((response) => {
        navigate(LOGIN, {data: response});
      });
    }
  };

  return (
    <RegisterComponent onSubmit={onSubmit}
                       onChange={onChange}
                       form={form}
                       errors={errors}
                       error={error} />
  );
};
