import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../features/authActions';
import { AppDispatch, RootState } from '../store';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { useSelector } from 'react-redux';

const SignIn: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const error = useSelector((state: RootState) => state.auth.error)
  

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Call the signIn action creator with email and password
    const result = await dispatch(signIn({ email, password }));
    
    if(result?.token) {
      navigate('/dashboard')
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
        <InputField id="email" label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <div className="text-red-500">{error}</div>}
        <div className="text-sm flex justify-end">
          <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Don't have an account? Sign up
          </Link>
        </div>
        <CustomButton type="submit">Sign in</CustomButton>
      </form>
    </div>
  </div>
  );
};

export default SignIn;
