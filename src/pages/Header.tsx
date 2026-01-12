import { Header } from "../components/ui/Header";
import { FaHome, FaUsers, FaPlane, FaMoneyBill, FaBell, FaUser } from 'react-icons/fa';

export const AdminHeader=()=>{
return(
    <div>
        <Header
        headername="Admin Dashboard"
  list={[
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Manage Travellers", path: "/travelers", icon: <FaUsers /> },
  { name: "Bookings", path: "/bookings", icon: <FaPlane /> },
  { name: "Destinations", path: "/destinations", icon: <FaPlane /> },
  { name: "Payments", path: "/payments", icon: <FaMoneyBill /> },
  { name: "Notifications", path: "/notifications", icon: <FaBell /> },
  { name: "Profile", path: "/profile", icon: <FaUser /> },
]}
/>
    </div>
)
}