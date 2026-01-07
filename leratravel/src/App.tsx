
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { AdminHeader } from './pages/Header'
import { Dashboard } from './pages/Dashboard'
import { ManageTravellers } from './pages/ManageTravellers';
import { Bookings } from './pages/Bookings';

function App() {
  return (
    <>
      <AdminHeader />
      <Routes>
        <Route path="/" element={<Dashboard />} />
       <Route path='/travelers' element={<ManageTravellers/>}/>
       <Route path='/bookings' element={<Bookings/>}/>
      </Routes>
    </>
  );
}
export default App
