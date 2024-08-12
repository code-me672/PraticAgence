import './App.css';
import React, {useEffect, useState} from 'react'; 
import Aos from "aos"; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loader from './Loader/Loader';

// import pages
import Home from './pages/Home';
import About from './pages/About';
import ServiceCom from './pages/ServiceCom';
import ServiceEvent from './pages/ServiceEvent';
import ServiceForma from './pages/ServiceForma';
import ServicePro from './pages/ServicePro';
import Porfolio from './pages/Porfolio';
import Contact from './pages/Contact';


/** root routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path:'/about',
    element: <About></About>
  },
  {
    path: '/services/conseil-en-communication',
    element: <ServiceCom></ServiceCom>
  },
  {
    path: '/services/production-audiovisuelle',
    element: <ServicePro></ServicePro>
  },
  {
    path: '/services/formation-coaching',
    element: <ServiceForma></ServiceForma>
  },
  {
    path: '/services/evenementiel',
    element: <ServiceEvent></ServiceEvent>
  },
  {
    path: '/portfolio',
    element: <Porfolio></Porfolio>
  },
  {
    path: '/contact-us',
    element: <Contact></Contact>
  },
])

function App() {
  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // Let create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
      <main className='w-screen'>
          <RouterProvider router={router}></RouterProvider>
      </main>
  );
}
export default App;
