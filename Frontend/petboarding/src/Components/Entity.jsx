import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Entity = () => {
  const [data, setData] = useState([]);

  const id = useParams();
  //   console.log("id:", id);

  useEffect(() => {
    fetch(`http://localhost:6789/details/${id.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <h2>Entity</h2>
      <p>Address : {data.Address}</p>
      <p>Capacity : {data.Capacity}</p>
      <p>City : {data.City}</p>
      <p>Cost Per Day : {data.Costperday}</p>
      <p>Name : {data.Name}</p>
      <p>Rating : {data.Ratings}</p>
      <p>Verified : {data.Verified}</p>
    </div>
  );
};
