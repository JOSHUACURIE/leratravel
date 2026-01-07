import { StartsCard } from "../components/ui/StatsCard";
import './Dashboard.css';
import { Dashboards } from "../dashboard/Dashboard";
const RECENT_BOOKINGS = [
  { id: 1, name: "Kerubo Achieng", route: "Nairobi → Mombasa", status: "confirmed" },
  { id: 2, name: "Brian Otieno", route: "Nairobi → Zanzibar", status: "pending" },
  { id: 3, name: "Faith Wanjiku", route: "Nairobi → Dubai", status: "paid" },
  { id: 4, name: "Daniel Mwangi", route: "Nairobi → Maasai Mara", status: "confirmed" },
  { id: 5, name: "Amina Hassan", route: "Nairobi → Cape Town", status: "cancelled" },
  { id: 6, name: "Kevin Ouma", route: "Nairobi → Diani Beach", status: "pending" },
];

const ALERTS = [
  { id: 1, type: "pending", text: " Pending Payment: Booking #1024 by Kerubo Achieng" },
  { id: 2, type: "cancelled", text: " Cancelled Trip: Booking #1019 by Amina Hassan" },
  { id: 3, type: "info", text: "New Traveller: Brian Otieno registered today" },
  { id: 4, type: "warning", text: " High Traffic Alert: 50+ bookings in last hour" },
  { id: 5, type: "info", text: "System Notice: Database backup completed successfully" },
  { id: 6, type: "warning", text: "Low Availability: 2 rooms left for Zanzibar package" },
];

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-title">
        <h1>Overview of System Activity</h1>
      </header>

      <section className="dashboard-cards">
        <div className="card-wrapper travellers-bg">
          <StartsCard text="Total Travellers" values={123} />
        </div>
        
        <div className="card-wrapper bookings-bg">
          <StartsCard text="Total Bookings" values={2500} />
        </div>
        
        <div className="card-wrapper revenue-bg">
          <StartsCard text="Total Revenue" values={100000} />
        </div>

        <div className="card-wrapper trips-bg">
          <StartsCard text="Active Trips" values={15} />
        </div>
      </section>

      <section className="operations">
        <div className="ops-card recent-bookings">
          <div className="card-header">
            <h2>Recent Bookings</h2>
          </div>
          <ul className="bookings-list">
            {RECENT_BOOKINGS.map((booking) => (
              <li key={booking.id}>
                <div className="booking-info">
                  <strong>{booking.name}</strong>
                  <span>{booking.route}</span>
                </div>
                <span className={`status ${booking.status}`}>
                  {booking.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="ops-card alerts">
          <div className="card-header">
            <h2>Alerts</h2>
          </div>
          <ul className="alerts-list">
            {ALERTS.map((alert) => (
              <li key={alert.id} className={`alert ${alert.type}`}>
                {alert.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <Dashboards/>
      </section>
    </div>
  );
};