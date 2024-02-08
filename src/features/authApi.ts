// authAPI.ts (or any appropriate file name)

import { SignUpData, AuthResponse, SignInData } from '../features/types/auth';

export const signUpAPI = async (userData: SignUpData): Promise<AuthResponse> => {
  const response = await fetch('https://reqres.in/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to sign in. Please check your credentials.');
  }
  const data: AuthResponse = await response.json();
  return data;
};

export const signInAPI = async (userData: SignInData): Promise<AuthResponse> => {
  const response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to sign in. Please check your credentials.');
  }
  const data: AuthResponse = await response.json();
  return data
};
