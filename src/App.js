
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './componet/Home';
import Login from './componet/Login';
import Register from './componet/Register';
import Main from './layouts/Main';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ])
  return (
    <div className="App">
        
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
