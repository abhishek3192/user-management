import { AppDispatch } from '../store';
import { setUser, setError } from './authSlice';
import { SignUpData, SignInData } from '../features/types/auth';
import { signInAPI, signUpAPI } from './authApi';

export const signUp = (userData: SignUpData) => async (dispatch: AppDispatch) => {
    try {
      const data = await signUpAPI(userData); // Call signUpAPI function
      dispatch(setUser(data));
      return data
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };

  
export const signIn = (userData: SignInData) => async (dispatch: AppDispatch) => {
try {
    const data = await signInAPI(userData); // Call signInAPI function
    dispatch(setUser(data));
    return data
    
} catch (error: any) {
    dispatch(setError(error.message));
}
};
  
