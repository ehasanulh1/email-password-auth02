
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginReactBootstrap from './components/LoginReactBootstrap';
import ReactBootstrap from './components/ReactBootstrap';
import Main from './layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <ReactBootstrap></ReactBootstrap>
      },
      {
        path: '/register',
        element: <ReactBootstrap></ReactBootstrap>
      },
      {
        path: '/login',
        element: <LoginReactBootstrap></LoginReactBootstrap>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
