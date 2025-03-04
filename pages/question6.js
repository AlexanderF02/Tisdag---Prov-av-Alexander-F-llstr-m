// 6. Jewelery store (3p)
// Visa en lista av smycken från apiet:
// https://fakestoreapi.com/products/category/jewelery
// I listan visas title och en liten bild för varje smycke.
// Bilden ska vara högst 300px bred.

// Om man klickar på ett smycke visas dess detaljsida.
// Där kan man se title, description och image (i orginal-storlek).

import React from "react";
import JewelryList from "../components/JewelryList";

export default function Question6() {
  return (
    <div>
      <h1>Question 6: Jewelry Store</h1>
      <JewelryList />
    </div>
  );
}

