import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar/navbar';
import Home from './Components/Pages/Home/home';
import Travel from './Components/Pages/Travel/travel';
import Signin from './Components/Signin/signin';
import Signup from './Components/Signup/signup';
import ListHotel from './Components/ListHotel/listhotel';
import DetailHotel from './Components/DetailHotel/detailhotel';
import Reservation from './Components/Reservation/reservation';
import ReservationList from './Components/ReservationList/reservationlist';
import ReservationDetail from './Components/ReservationDetail/reservationdetail';

function App() {
  return (
    <div className = 'App'>
      <div>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="travel" element={<Travel />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="listhotel" element={<ListHotel />} />
            <Route path="detailhotel" element={<DetailHotel />} />
            <Route path="reservation" element={<Reservation />} />
            <Route path="reservationlist" element={<ReservationList />} />
            <Route path="reservationdetail" element={<ReservationDetail />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
