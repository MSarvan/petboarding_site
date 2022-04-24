import { useState, useEffect } from "react"

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
    temp.sort((a, b) => a.CostPerDay - b.CostPerDay);
    setSortdata(temp);
  };
  const handleRating = () => {
    let temp = [...data];
    temp.sort((a, b) => b.Rating - a.Rating);
    setSortdata(temp);
  };
  const handleVerified = () => {
    let temp = data.filter((e) => e.Verified == "true");
    setSortdata(temp);
  };
  const handleReset = () => {
    setSortdata(data);
  };

    return (
        <div>
        <h2>Home</h2>
      <button onClick={handleSort}>Sort by Costperday</button>
      <button onClick={handleRating}>Sort by Rating</button>
      <button onClick={handleVerified}>Filter by Verified</button>
      <button>Filter by City</button>
      <button onClick={handleReset}>Reset</button>

      <table style={{ border: "1.5px solid black" }}>
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
              <td style={{ border: "1px solid gray" }}>{e.CostPerDay}</td>
              <td style={{ border: "1px solid gray" }}>{e.Verified}</td>
              <td style={{ border: "1px solid gray" }}>{e.Rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}