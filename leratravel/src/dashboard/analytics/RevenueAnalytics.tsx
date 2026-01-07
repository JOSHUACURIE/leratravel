import { useEffect,useMemo,useState } from "react";
import { RevenueSnapshot } from "./components/RevenueSnapshot";
import { RevenueChart } from "./components/RevenueChart";
import './analytics.css'
type RevenueRecord={ //types
    date:string,
    amount:number
};

type TimeRange="7D"|"30D"|"90D";

/* my mock data */
const mockRevenue: RevenueRecord[]=[
  { date: "2024-01-01", amount: 12000 },
  { date: "2024-01-05", amount: 18000 },
  { date: "2024-01-10", amount: 9000 },
  { date: "2024-01-15", amount: 24000 },
  { date: "2024-01-20", amount: 30000 },
  { date: "2024-01-25", amount: 21000 },
]


export const RevenueAnalytics=()=>{
//state ownership

const[revenueData,setRevenueData]=useState<RevenueRecord[]>([]);
const [timeRange,setTimeRange]=useState<TimeRange>("30D");
const [loading,setLoading]=useState(true);
const [error,setError]=useState<string|null>(null);

//simulation of an api call

useEffect(()=>{
    setLoading(true);

    const timer=setTimeout(()=>{
try{
setRevenueData(mockRevenue);
setLoading(false);
}catch{
setError("Failed to load the data");
setLoading(false);

}    },800);
 return ()=>clearTimeout(timer);

},[timeRange])


/*Derived Data*/

const totalRevenue= useMemo(()=>{
    return revenueData.reduce((sum,item)=>sum+ item.amount,0);
},[revenueData])


const averageRevenue=useMemo(()=>{
if(revenueData.length=== 0) return 0;
return Math.round(totalRevenue/revenueData.length);
},[totalRevenue,revenueData]);



/*let me now work on the ui states*/

if(loading) return <div className="analytics-loading">Loading revenue analytics...</div>;

if(error) return<div className="analytics-error">{error}</div>;

/* Rendering now */

return (
  <section className="revenue-analytics">
    <header className="analytics-header">
      <h2>Revenue Analytics</h2>
      <p>Overview of Revenue Performance</p>
    </header>

    <div className="analytics-filter">
      {(["7D", "30D", "90D"] as TimeRange[]).map((range) => (
        <button
          key={range}
          className={timeRange === range ? "active" : ""}
          onClick={() => setTimeRange(range)}
        >
          {range === "7D" ? "7 Days" : range === "30D" ? "30 Days" : "90 Days"}
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
)};