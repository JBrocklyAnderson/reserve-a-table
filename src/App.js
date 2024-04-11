import './App.css';
import Nav from './components/common/nav/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import Menu from './components/menu/Menu';
import ReservationForm from './components/reservationForm/ReservationForm';
import ReservationConfirmed from './components/reservationConfirmed/ReservationConfirmed';
import Footer from './components/common/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/our-story' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reserve-a-table' element={<ReservationForm />} />
        <Route path='/reservation-confirmed' element={<ReservationConfirmed />} />
      </Routes>

      <Footer />
  </BrowserRouter>
  );
};

export default App;
