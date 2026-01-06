import { StartsCard } from "../components/ui/StatsCard";
import './Dashboard.css'

export const Dashboard=()=>{
return(
    <div className="dashboard-container">
       <div>
          <div className="dashboard-title">
                <h1>Overview of System Activity</h1>
            </div>
        <div className="dashboard-cards">

          
            <div className="travellers">
            <StartsCard
            text="Total Travellers"
            values={123}
            
            /></div>
         
           <div className="bookings">
            <StartsCard
            text="Total Bookings"
            values={2500}
            /></div>
            
            <div className="revenue">
            <StartsCard
            text="Total Revenue"
            values={100000}
            /></div>


              <div className="trips">
            <StartsCard
            text="Active Trips"
            values={15}
            /></div>
            
            
        </div>
        </div>
<div className="operations">
<div className="recent-bookings">
  <h1>Recent Bookings</h1>

  <ul className="bookings-list">
    <li>
      <strong>Kerubo Achieng</strong> — Nairobi → Mombasa
      <span className="status confirmed">Confirmed</span>
    </li>

    <li>
      <strong>Brian Otieno</strong> — Nairobi → Zanzibar
      <span className="status pending">Pending</span>
    </li>

    <li>
      <strong>Faith Wanjiku</strong> — Nairobi → Dubai
      <span className="status paid">Paid</span>
    </li>

    <li>
      <strong>Daniel Mwangi</strong> — Nairobi → Maasai Mara
      <span className="status confirmed">Confirmed</span>
    </li>

    <li>
      <strong>Amina Hassan</strong> — Nairobi → Cape Town
      <span className="status cancelled">Cancelled</span>
    </li>

    <li>
      <strong>Kevin Ouma</strong> — Nairobi → Diani Beach
      <span className="status pending">Pending</span>
    </li>
  </ul>
</div>

  <div className="alerts">
  <h1>Alerts</h1>

  <ul className="alerts-list">
    <li className="alert pending">
      ⚠️ Pending Payment: Booking #1024 by Kerubo Achieng
    </li>
    <li className="alert cancelled">
      ❌ Cancelled Trip: Booking #1019 by Amina Hassan
    </li>
    <li className="alert info">
      🆕 New Traveller: Brian Otieno registered today
    </li>
    <li className="alert warning">
      ⚡ High Traffic Alert: 50+ bookings in last hour
    </li>
    <li className="alert info">
      💾 System Notice: Database backup completed successfully
    </li>
    <li className="alert warning">
      🔔 Low Availability: 2 rooms left for Zanzibar package
    </li>
  </ul>
</div>


</div>
    </div>
)
}