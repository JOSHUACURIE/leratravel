import { useState, useEffect } from "react";

import "./travellers.css";

type Traveller = {
  id: number;
  name: string;
  date: string;
  destination: string;
  amount: number;
};

export const ManageTravellers: React.FC = () => {
  const [travellers, setTravellers] = useState<Traveller[]>([]);


  useEffect(() => {
   fetch("/travellers.json")
  .then((res) => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  })
  .then((data) => setTravellers(data.travellers))
  .catch((err) => console.error("Failed to fetch travellers", err));
   
    
  }, []);
  const totalAmount= travellers.reduce((sum,t)=>sum+t.amount,0).toLocaleString(); //derived one
  const totatTravellers=travellers.length; //derived
  return (
    <div className="travellers-container">
      <div className="travellers-card">
        <div className="travellers-header">
          <h4>Overview of Travellers</h4>
          <p>The list of travellers with their additional info</p>
        </div>

        <ul className="travellers-list">
          {travellers.map((traveller) => (
            <li key={traveller.id} className="traveller-item">
                <div className="traveller">
              <div >
                <strong>{traveller.name}</strong>
                <p>{traveller.destination}</p>
              </div>

              <div className="date-money">
                <span>{traveller.date}</span>
                <span className="amount">KES {traveller.amount}</span>
              </div></div>
            </li>
          ))}
        </ul>
        <div className="summary">
            <div className="summary-item">
            <p>Total Amount</p>
            <p>KES {totalAmount}</p>
            </div><div className="summary-item">
            <p>Total Travellers</p>
           <p>{totatTravellers}</p></div>
        </div>
      </div>

      <div>
       
      </div>
    </div>
  );
};
