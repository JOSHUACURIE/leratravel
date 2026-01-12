import React, { useState, type ChangeEvent, type FormEvent } from "react";

import { type Traveller, type Destination } from "./ManageTravellers"; 

interface TravellerFormProps {
  onAdd: (newTraveller: Traveller) => void;
  travellers: Destination[]; 
}

export const TravellerForm: React.FC<TravellerFormProps> = ({ onAdd, travellers }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneno: "",
    destination: "" 
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Logic to find the specific package data based on the selection
    const selected = travellers.find(d => d.destination === formData.destination);

    if (selected) {
      const newTraveller: Traveller = {
        id: Date.now(), // Generates a unique ID for the new row
        name: formData.fullName,
        destination: selected.destination,
        amount: selected.amount,
        date: selected.date
      };

      // Calling the parent function to update the list
      onAdd(newTraveller); 
      
      // Reset form fields to empty strings
      setFormData({ 
        fullName: "", 
        email: "", 
        phoneno: "", 
        destination: "" 
      });
      
      alert(`Success! ${newTraveller.name} has been booked for ${newTraveller.destination}.`);
    } else {
      alert("Please select a valid travel destination from the list.");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2>Book Your Trip</h2>
          <p>Please provide your contact and travel details.</p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          {/* Full Name Section */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input 
              id="fullName"
              type="text" 
              placeholder="e.g., Joshua Juma" 
              value={formData.fullName} 
              name="fullName" 
              onChange={handleChange} 
              required
            />
          </div>

          <div className="form-row">
            {/* Email Section */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                id="email"
                type="email" 
                placeholder="vida@gmail.com" 
                value={formData.email} 
                name="email" 
                onChange={handleChange} 
                required
              />
            </div>

            {/* Phone Section */}
            <div className="form-group">
              <label htmlFor="phoneno">Phone Number</label>
              <input 
                id="phoneno"
                type="text" 
                placeholder="07xxxxxxxx" 
                value={formData.phoneno} 
                name="phoneno" 
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          {/* Destination & Package Selection */}
          <div className="form-group">
            <label htmlFor="destination">Travel Destination & Available Date</label>
            <select 
              id="destination"
              name="destination" 
              value={formData.destination} 
              onChange={handleChange} 
              required
            >
              <option value="" disabled>-- Choose a destination --</option>
              {travellers && travellers.length > 0 ? (
                travellers.map((traveller) => (
                  <option key={traveller.id} value={traveller.destination}>
                    {traveller.destination} — KES {traveller.amount.toLocaleString()} ({traveller.date})
                  </option>
                ))
              ) : (
                <option disabled>No destinations available</option>
              )}
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};