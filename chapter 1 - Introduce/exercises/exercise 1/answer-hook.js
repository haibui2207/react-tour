import React, { useState, useEffect } from 'react';

const App = () => {
  const [now, setNow] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setNow(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return <h1>{now}</h1>;
};

export default App;
