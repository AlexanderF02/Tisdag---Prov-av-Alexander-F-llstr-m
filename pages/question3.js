// 3. Buttons (3p)
// Skapa två komponenter: Button och ButtonWithChildren.
// Button ska ha en prop `title` som anger rubriken på knappen.
// ButtonWithChildren ska använda children för att visa texten i knappen.
// Båda komponenter ska ha en prop `onClick` som kallas när man klickar på knappen.
// Använd båda komponenterna på sidan. När man klickar på Button-knappen ska
// det skrivas ut "klick på Button" på sidan.
// När man klickar på ButtonWithChildren-knappen
// ska det skrivas ut "klick på ButtonWithChildren".

import React, { useState } from 'react';

function Button({ title, onClick }) {
  return <button onClick={onClick}>{title}</button>;
}

function ButtonWithChildren({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function Question3() {
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setMessage('klick på Button');
  };

  const handleButtonWithChildrenClick = () => {
    setMessage('klick på ButtonWithChildren');
  };

  return (
    <div>
      <h1>Question 3</h1>
      <Button title="Button" onClick={handleButtonClick} />
      <ButtonWithChildren onClick={handleButtonWithChildrenClick}>
        ButtonWithChildren
      </ButtonWithChildren>
      <p>{message}</p>
    </div>
  );
}

