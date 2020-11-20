import React from 'react';
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
        <div class="container">
          <Weather defaultCity="Wiesbaden" />
          
        </div>
    </div>
  );
}
