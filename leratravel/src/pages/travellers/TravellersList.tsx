import React from 'react';
import { type Traveller } from './ManageTravellers';
import './list.css'
interface TravellersListProps {
  travellers: Traveller[]; 
}

export const TravellersList: React.FC<TravellersListProps> = ({ travellers }) => {
  return (
    <div className="table-container">
      <table className="travellers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Destination</th>
            <th>Date</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {travellers.map((traveller) => (
            <tr key={traveller.id}>
              <td><strong>{traveller.name}</strong></td>
              <td>{traveller.destination}</td>
              <td>{traveller.date}</td>
              <td className="text-right KES-cell">
                KES {traveller.amount.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};