import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contato'
import Home from './pages/home';

const router = createBrowserRouter([
  {
    element:
    (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    ),
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
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
