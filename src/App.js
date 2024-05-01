// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import Layout from './components/Layout';
// import Scroll from './components/context/Scroll';
// import Nav from './components/common/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import ReservationForm from './components/reservationForm/ReservationForm';
import ReservationConfirmed from './components/reservationConfirmed/ReservationConfirmed';
// import Footer from './components/common/Footer';
import './App.css';



const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routes,
    },
  ]);

  return (
    <RouterProvider router={router} />

    /* <BrowserRouter>
      <Nav />

      <Scroll />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/our-story' element={<About />} />
        {/* <Route path='/menu' element={<Menu />} />
        <Route path='/reserve-a-table' element={<ReservationForm />} />
        <Route path='/reservation-confirmed' element={<ReservationConfirmed />} />
      </Routes>

      <Footer />
  </BrowserRouter> */
  );
};

export default App;
