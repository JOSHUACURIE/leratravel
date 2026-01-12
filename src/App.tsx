
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { AdminHeader } from './pages/Header'
import { Dashboard } from './pages/Dashboard'
import { ManageTravellers } from './pages/travellers/ManageTravellers';
import { Bookings } from './pages/Bookings';
import { Destination } from './pages/Destinations';
import { Login } from './pages/auth/Login';
function App() {
  return (
    <>
      <AdminHeader />
      <Routes>
        <Route path="/" element={<Dashboard />} />
       <Route path='/travelers' element={<ManageTravellers/>}/>
       <Route path='/bookings' element={<Bookings/>}/>
       <Route path='/destinations' element={<Destination/>}/>
       <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  );
}
export default App
