import React, { useState } from "react";

export const Createentity = () => {
  const [userdetails, setUserdetails] = useState({
    Name: "",
    City: "",
    Address: "",
    Capacity: "",
    CostperDay: "",
    Verified: "",
    Rating: "",
  });

  const handleChange = (e) => {
    setUserdetails({ ...userdetails, [e.target.name]: e.target.value });
  };

  const handlesubmit = () => {
    try {
      fetch(`http://localhost:6789/details`, {
        method: "POST",
        body: JSON.stringify(userdetails),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      console.log(e.message);
    }
    alert("Updated Successfully!");
  };

  return (
    <div>
      <h2>Create Entity</h2>
      <br />
      <input
        type="text"
        name="Name"
        placeholder="Enter name"
        value={userdetails.Name}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="text"
        name="City"
        placeholder="Enter city"
        value={userdetails.City}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="text"
        name="Address"
        placeholder="Enter address"
        value={userdetails.Address}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="text"
        name="Capacity"
        placeholder="Enter capacity"
        value={userdetails.Capacity}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="text"
        name="CostperDay"
        placeholder="Enter cost per day"
        value={userdetails.CostperDay}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="text"
        name="Rating"
        placeholder="Enter ratings"
        value={userdetails.Rating}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
};
