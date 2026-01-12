import { useContext, useMemo } from "react";
import { RevenueContext } from "./RevenueContext";
import { RevenueSnapshot } from "./components/RevenueSnapshot";
import { RevenueChart } from "./components/RevenueChart";
import './analytics.css'

export const RevenueAnalytics = () => {
  const context = useContext(RevenueContext);
  
  if (!context) {
    throw new Error("Revenue Analytics must be used within revenue provider");
  }

  const { revenueData, loading, error, changeTimeRange } = context;

  // Derived data
  const totalRevenue = useMemo(() => 
    revenueData.reduce((sum, r) => sum + r.amount, 0), [revenueData]
  );
  
  const averageRevenue = useMemo(() => 
    (revenueData.length ? Math.round(totalRevenue / revenueData.length) : 0), [totalRevenue, revenueData]
  );

if (loading) {
  return (
    <div className="analytics-loading">
      <div className="spinner-container">
        <div className="loading-spinner"></div>
        <p>Updating Analytics...</p>
      </div>
    </div>
  );
}
  if (error) return <div className="analytics-error">{error}</div>;

  return (
    <section className="revenue-analytics">

      <header className="analytics-header">
        <h2>Revenue Analytics</h2>
        <p>Real-time performance metrics and distribution</p>
      </header>

 
      <div className="analytics-filter">
        {["7D", "30D", "90D"].map((range) => (
          <button
            key={range}
           
            
            onClick={() => changeTimeRange(range as "7D" | "30D" | "90D")}
          >
            {range === "7D" ? "Last 7 Days" : range === "30D" ? "Last 30 Days" : "Last 90 Days"}
          </button>
        ))}
      </div>

      <div className="revenue-content">

        <RevenueSnapshot
          totalRevenue={totalRevenue}
          averageRevenue={averageRevenue}
        />

    
        <div className="chart-container">
          <RevenueChart revenueData={revenueData} />
        </div>
      </div>
    </section>
  );
};