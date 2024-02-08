import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../features/authActions';
import { AppDispatch, RootState } from '../store';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state: RootState) => state.auth.error)
  const navigate = useNavigate()


  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await dispatch(signUp({ email, password }));
    
    if(result?.token) {
      navigate('/signin')
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for a new account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          <InputField id="email" label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputField id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <div className="text-red-500">{error}</div>}
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
