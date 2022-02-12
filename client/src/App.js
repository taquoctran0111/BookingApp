import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './Components/NavBar/navbar';
import Home from './Components/Pages/Home/home';
import Travel from './Components/Pages/Travel/travel';

function App() {
  return (
    <div className = 'App'>
      <div>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="travel" element={<Travel />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
