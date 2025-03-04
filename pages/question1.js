// 1. Popup (3p)
//
// Skapa en knapp "visa" på sidan. När man klickar på knappen ska en popup visas.
// Popup:en visar rubriken "En popup" och en stängknapp i en ruta.
// När man klickar på stängknappen ska popupen tas bort.

import { useState } from 'react';

export default function Question1() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <h1>Question 1</h1>
      <button onClick={handleShowPopup}>Visa</button>
      {showPopup && (
        <div className="popup">
          <h2>En popup</h2>
          <button onClick={handleClosePopup}>Stäng</button>
        </div>
      )}
    </div>
  );
}
