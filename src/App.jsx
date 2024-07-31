import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    element:
    (
      <>
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </>
    ),
    children:[
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])



function App() {

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App
