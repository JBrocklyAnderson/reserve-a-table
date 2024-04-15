import './App.css';
import Nav from './components/common/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import ReservationForm from './components/reservationForm/ReservationForm';
import ReservationConfirmed from './components/reservationConfirmed/ReservationConfirmed';
import Footer from './components/common/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const preventDefaultAction = (e) => {
  e.preventDefault();
};

export const placeholderLinkAlert = (e) => {
  e.preventDefault();
  alert('This page is coming soon!');
};

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/our-story' element={<About />} />
        {/* <Route path='/menu' element={<Menu />} /> */}
        <Route path='/reserve-a-table' element={<ReservationForm />} />
        <Route path='/reservation-confirmed' element={<ReservationConfirmed />} />
      </Routes>

      <Footer />
  </BrowserRouter>
  );
};

export default App;
