
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { AdminHeader } from './pages/Header'
import { Dashboard } from './pages/Dashboard'


function App() {
  return (
    <>
      <AdminHeader />
      <Routes>
        <Route path="/" element={<Dashboard />} />
       
      </Routes>
    </>
  );
}
export default App
