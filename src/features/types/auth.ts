// Types for sign-up data sent to the server
export interface SignUpData {
    email: string;
    password: string;
  }
  
  // Types for sign-in data sent to the server
  export interface SignInData {
    email: string;
    password: string;
  }
  
  // Types for the response from the server after sign-up or sign-in
  export interface AuthResponse {
    id: number;
    token: string;
  }



  