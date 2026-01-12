import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Destinations.css";

type DestinationType = {
  _id: string;
  name: string;
  description: string;
  email: string;
};

type FormDataType = Omit<DestinationType, "_id">;
export const Destination: React.FC = () => {
const [destinations, setDestinations] = useState<DestinationType[]>([]);
const [formData, setFormData] = useState<FormDataType>({
  name: "",
  description: "",
  email: "",
});


  const fetchDestinations = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/destinations");
      setDestinations(res.data);
    } catch (error) {
      console.error("Failed to fetch destinations:", error);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/destinations",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );


      setFormData({
        name: "",
        description: "",
        email: "",
      });

      fetchDestinations();

    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong while submitting the form");
    }
  };
const handleDelete = async (id: string) => {
  const confirmed = window.confirm("Are you sure you want to delete this destination?");
  if (!confirmed) return;

  try {
    await axios.delete(`http://localhost:5000/api/destinations/${id}`);
    setDestinations(prev => prev.filter(item => item._id !== id));
  } catch (error) {
    console.error("Delete failed:", error);
    alert("Failed to delete");
  }
};


  return (
    <div className="destination-container">
      <div className="destination-card">
        <div className="destination-header">
          <h1>Create Destinations</h1>
          <p>Here are the currently available destinations</p>

          <ul>
            {destinations.length > 0 ? (
              destinations.map(dest => (
                <li key={dest._id}>
                  <strong>{dest.name}</strong> — {dest.description}   <button
        onClick={() => handleDelete(dest._id)}
        style={{ marginLeft: "10px", color: "red" }}
      >
        Delete
      </button>
                </li>
              ))
            ) : (
              <li>No destinations found</li>
            )}
          </ul>
        </div>

        <form className="destination-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Description</label>
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <button type="submit">Book</button>
          </div>
        </form>
      </div>
    </div>
  );
};
