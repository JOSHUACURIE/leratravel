
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { AdminHeader } from './pages/Header'
import { Dashboard } from './pages/Dashboard'
import { ManageTravellers } from './pages/travellers/ManageTravellers';
import { Bookings } from './pages/Bookings';
import { Destination } from './pages/Destinations';

function App() {
  return (
    <>
      <AdminHeader />
      <Routes>
        <Route path="/" element={<Dashboard />} />
       <Route path='/travelers' element={<ManageTravellers/>}/>
       <Route path='/bookings' element={<Bookings/>}/>
       <Route path='/destinations' element={<Destination/>}/>
      </Routes>
    </>
  );
}
export default App
