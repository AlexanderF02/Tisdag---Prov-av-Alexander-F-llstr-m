import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function JewelryList() {
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then(response => response.json())
      .then(data => setJewelry(data));
  }, []);

  return (
    <div>
      <h2>Jewelry List</h2>
      <ul>
        {jewelry.map(item => (
          <li key={item.id}>
            <Link href={`/jewelries/${item.id}`} legacyBehavior>
              <a>
                <h3>{item.title}</h3>
                <img src={item.image} alt={item.title} style={{ maxWidth: '300px' }} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
