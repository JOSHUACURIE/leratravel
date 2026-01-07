import React, { useState, useEffect } from "react";
import { TravellersList } from "./TravellersList";
import { TravellerForm } from "./TravellerForm";
import "./travellers.css";

// 1. Define and Export Types
export type Destination = {
  id: number;
  destination: string;
  amount: number;   
  date: string;       
};

export type Traveller = {
  id: number;
  name: string;
  date: string;
  destination: string;
  amount: number;
};

export const ManageTravellers: React.FC = () => {
  const [travellers, setTravellers] = useState<Traveller[]>([]);
  const [error, setError] = useState<string | null>(null);

  // 2. Fetch data on mount
  useEffect(() => {
    fetch("/travellers.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load travellers data");
        return res.json();
      })
      .then((data) => {
        setTravellers(data.travellers || []);
      })
      .catch((err) => setError(err.message));
  }, []);

  // 3. Handler to add a new traveller (Lifting State Up)
  const handleAddTraveller = (newEntry: Traveller) => {
    setTravellers((prev) => [...prev, newEntry]);
  };

  // 4. DERIVED DATA: Create a unique list of destinations for the form dropdown
  // We use the travellers array to figure out which trips are available

  const totalAmount = travellers
    .reduce((sum, t) => sum + t.amount, 0)
    .toLocaleString();
  
  const totalCount = travellers.length;

  return (
    <div className="manage-wrapper">
      {error && <div className="error-banner">{error}</div>}

      <section className="form-section">
        {/* Pass the function and the unique destinations */}
        <TravellerForm 
          onAdd={handleAddTraveller} 
          travellers={travellers} 
        />
      </section>

      <div className="travellers-container">
        <div className="travellers-card">
          <div className="travellers-header">
            <h4>Overview of Travellers</h4>
            <p>Real-time list of confirmed bookings</p>
          </div>

          <div className="list-content">
            <TravellersList travellers={travellers} />
          </div>

          <div className="summary">
            <div className="summary-item">
              <p>Total Revenue</p>
              <p>KES {totalAmount}</p>
            </div>
            <div className="summary-item">
              <p>Total Bookings</p>
              <p>{totalCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};