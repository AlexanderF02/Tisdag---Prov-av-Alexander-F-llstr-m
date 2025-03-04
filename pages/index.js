import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { PostsProvider } from '../context/PostsContext';

const IndexPage = () => {
  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      createRoot(rootElement).render(
        <PostsProvider>
          {/* Your app components go here */}
        </PostsProvider>
      );
    }
  }, []);

  return (
    <div id="root">
      {/* Your app components go here */}
    </div>
  );
};

export default IndexPage;




