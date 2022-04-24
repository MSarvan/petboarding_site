import { useState, useEffect } from "react";

export const Home = () => {
  const [data, setData] = useState([]);
  const [sortdata, setSortdata] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:6789/details`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setSortdata(res);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleSort = () => {
    let temp = [...data];
    temp.sort((a, b) => a.Costperday - b.Costperday);
    setSortdata(temp);
  };
  const handleRatings = () => {
    let temp = [...data];
    temp.sort((a, b) => b.Ratings - a.Ratings);
    setSortdata(temp);
  };
  const handleVerified = () => {
    let temp = data.filter((e) => e.Verified == "true");
    setSortdata(temp);
  };
  const handleCity = (val) => {
    let temp = data.filter((e) => e.City == val);
    setSortdata(temp);
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleSort}>Sort by Cost per day</button>
      <button onClick={handleRatings}>Sort by Ratings</button>
      <button onClick={handleVerified}>Filter by Verified</button>
      <br /><br />
      <input type="text" placeholder="Enter City"/>
      <button onClick={(e) => handleCity(e)}>Filter by City</button>
      <br /><br />

      <table style={{ border: "1.5px solid black", margin: "auto" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid gray" }}>S.No</th>
            <th style={{ border: "1px solid gray" }}>Name</th>
            <th style={{ border: "1px solid gray" }}>City</th>
            <th style={{ border: "1px solid gray" }}>Address</th>
            <th style={{ border: "1px solid gray" }}>Capacity</th>
            <th style={{ border: "1px solid gray" }}>Cost Per Day</th>
            <th style={{ border: "1px solid gray" }}>Verified</th>
            <th style={{ border: "1px solid gray" }}>Rating</th>
          </tr>
        </thead>
        <tbody>
          {sortdata.map((e, i) => (
            <tr key={e.id}>
              <td style={{ border: "1px solid gray" }}>{i + 1}.</td>
              <td style={{ border: "1px solid gray" }}>{e.Name}</td>
              <td style={{ border: "1px solid gray" }}>{e.City}</td>
              <td style={{ border: "1px solid gray" }}>{e.Address}</td>
              <td style={{ border: "1px solid gray" }}>{e.Capacity}</td>
              <td style={{ border: "1px solid gray" }}>{e.Costperday}</td>
              <td style={{ border: "1px solid gray" }}>{e.Verified}</td>
              <td style={{ border: "1px solid gray" }}>{e.Ratings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
