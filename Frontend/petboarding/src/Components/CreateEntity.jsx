import React, { useState } from "react";

export const Createentity = () => {
  const [userdetails, setUserdetails] = useState({
    Name: "",
    City: "",
    Address: "",
    Capacity: "",
    Costperday: "",
    Verified: "",
    Ratings: "",
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
        name="Costperday"
        placeholder="Enter cost per day"
        value={userdetails.Costperday}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="text"
        name="Verified"
        placeholder="Verified?"
        value={userdetails.Verified}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="text"
        name="Ratings"
        placeholder="Enter ratings"
        value={userdetails.Ratings}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <br />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
};
