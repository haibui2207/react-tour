import React, { useState, useEffect } from 'react';

const WebComponent = () => (
  <div style={{ height: '100vh', backgroundColor: 'red' }}>Web Component</div>
);
const MobileComponent = () => (
  <div style={{ height: '100vh', backgroundColor: 'yellow' }}>
    Mobile Component
  </div>
);

const switchMobileWeb = (Web, Mobile, breakpoint = 576) => (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const currentWidth = window.innerWidth;
    if (currentWidth <= breakpoint && !isMobile) {
      setIsMobile(true);
    } else if (currentWidth > breakpoint && isMobile) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return isMobile ? <Mobile {...props} /> : <Web {...props} />;
};

const App = () => {
  const Component = switchMobileWeb(WebComponent, MobileComponent);

  return <Component />;
};

export default App;