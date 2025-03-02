import React, { useState } from 'react';
import axios from 'axios';
import Back from '../image/Back.jpg';
import './CreatePage.css';

const CreatePage = () => {



  const [formData, setFormData] = useState({
    house_type: '',
    total_land_dimension: '',
    guest_room_dimension: '',
    living_room_dimension: '',
    garage_dimension: '',
    kitchen_dimension: '',
    balcony_dimension: '',
    dining_room_dimension: '',
    foyer_dimension: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newTab = window.open("", "_blank");  // ✅ Open a blank tab first
  
    try {
      const response = await axios.post(
        'http://localhost:8000/generate-house-map/',
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );
  
      if (response.data.image_url) {
        newTab.location.href = response.data.image_url;  // ✅ Redirect after receiving response
      } else {
        newTab.close();  // ❌ Close the tab if no image is found
        alert("Failed to retrieve image URL");
      }
    } catch (error) {
      newTab.close();  // ❌ Close the tab if an error occurs
      console.error('Error:', error);
      alert('Failed to generate floor plan');
    }
  };

  return (
    <div className="createPage-body" style={{ backgroundImage: `url(${Back})` }}>
      <div className="tinted">
        <div className="form-container">
          <p className="title">Upload Floor Plan</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="house_type" className="Housetype-title">Select House Type *</label>
              <select name="house_type" className="Housetype-select" value={formData.house_type} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Studio">Studio</option>
                <option value="Villa">Villa</option>
                <option value="Luxury House">Luxury House</option>
                <option value="Standard House">Standard House</option>
              </select>
            </div>
            <div className="input-group">
              <table>
                <thead>
                  <tr>
                    <th>Room</th>
                    <th>Dimension</th>

                  </tr>
                </thead>
                <tbody>
                  {["Total Land", "Guest Room", "Living Room", "Garage", "Kitchen", "Balcony", "Dining Room", "Foyer"].map((room, index) => (
                    <tr key={index}>
                      <td><label>{room} Dimension {room === "Total Land" ? "*" : ""}</label></td>
                      <td>
                        <input
                          type="text"
                          name={room.toLowerCase().replace(/\s+/g, "_") + "_dimension"}
                          placeholder="00 x 00"
                          value={formData[room.toLowerCase().replace(/\s+/g, "_") + "_dimension"] || ''}
                          onChange={handleChange}
                          required={room === "Total Land"}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button type="submit" className="sign">Generate Plan</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
