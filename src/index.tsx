import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SingIn";
import SignUp from "./pages/SingUp";
import ReactDOM from "react-dom/client";
import './index.css'
import { Provider } from "react-redux";
import store from "./store";
import ErrorPage from "./components/Error";
import Dashboard from "./pages/dashboard";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
    errorElement: <ErrorPage/>
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <ErrorPage />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <ErrorPage />
  }
])

const root = (ReactDOM as any).createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter}></RouterProvider>
  </Provider>
);
