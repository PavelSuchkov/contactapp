import React, { useContext, useEffect, useState } from 'react';
import { LoginComponent } from '../../components/login/LoginComponent';
import { GlobalContext } from '../../context/Provider';
import { loginUser } from '../../context/actions/auth/loginUser';
import { useRoute } from '@react-navigation/native';

export const Login = () => {

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);

  const { params } = useRoute();

  useEffect(() => {
    if (params?.data)
    {
      setForm({...form, username: params?.data.username})
      setJustSignedUp(true)
    }
  }, [params])

  const {
    authDispatch,
    authState: { error, loading },
  } = useContext(GlobalContext);


  const onChange = ({ name, value }) => {
    setJustSignedUp(false);
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
        } else if (value.length >= 6) {
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
      loginUser(form)(authDispatch);
    }
  };

  return (
    <LoginComponent onSubmit={onSubmit}
                    onChange={onChange}
                    form={form}
                    errors={errors}
                    error={error}
                    loading={loading}
                    justSignedUp={justSignedUp}
    />
  );
};
