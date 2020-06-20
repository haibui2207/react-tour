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

  const eventHandler = () => {
    if (window.innerWidth <= breakpoint && !isMobile) {
      setIsMobile(true);
    } else if (window.innerWidth > breakpoint && isMobile) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', eventHandler);

    return () => {
      window.removeEventListener('resize', eventHandler);
    };
  }, [window.innerWidth]);

  return isMobile ? <Mobile {...props} /> : <Web {...props} />;
};

const App = () => {
  const Component = switchMobileWeb(WebComponent, MobileComponent);

  return <Component />;
};

export default App;