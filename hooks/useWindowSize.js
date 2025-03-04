import { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    
    window.addEventListener('resize', handleResize);

    
    handleResize();

    
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const isMobile = size.width < 600;

  return { ...size, isMobile };
}

export default useWindowSize;
