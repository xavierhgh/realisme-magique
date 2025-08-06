import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import './App.css';
import Main from './components/Main';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulation d'un appel API ou de chargement initial
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 secondes pour la démo

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <Main />}
    </>
  );
}

export default App;