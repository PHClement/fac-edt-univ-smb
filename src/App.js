import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import logo from "assets/Logo_USMB_web_grand_RVB.png";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <img src={logo} style={{height: 40, marginBottom: 30}}/>
      <h1>Emploi du Temps</h1>
      <h2>
        L3 INFO-?{' '}
      </h2>
      <br />
      <h2>Ajout du calendrier automatique</h2>
      <a href="#" className="btn btn-store">
        <span className="fa fa-apple fa-3x pull-left"></span>
        <span className="btn-label">Ajout sur</span>
        <span className="btn-caption">iOS, MAC</span>
      </a>
      <a href="#" className="btn btn-store">
        <span className="fa fa-android fa-3x pull-left"></span>
        <span className="btn-label">Ajout sur</span>
        <span className="btn-caption">Android</span>
      </a>
    </main>
  );
}

export default App;
