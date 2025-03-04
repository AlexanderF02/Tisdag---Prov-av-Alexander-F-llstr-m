import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function JewelryDetail() {
  const [jewelry, setJewelry] = useState(null);
  const { query } = useRouter(); 
  const { id } = query;

  useEffect(() => {
    if (id) {
      const fetchJewelryDetail = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setJewelry(data);
      };

      fetchJewelryDetail();
    }
  }, [id]);

  if (!jewelry) return <p>Laddar...</p>;

  return (
    <div>
      <h2>{jewelry.title}</h2>
      <img src={jewelry.image} alt={jewelry.title} width="500" />
      <p>{jewelry.description}</p>
    </div>
  );
}

export default JewelryDetail;
