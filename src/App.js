import './App.css';
import React, { useState, useRef } from 'react'
import { useFetch } from './useFetch';

function App() {
  const URL = 'https://api.wheretheiss.at/v1/satellites/25544'
  const { data, error, loading } = useFetch(URL)
  console.log(JSON.stringify(data))
  return (
    <div className="App">
      {loading ||
        <div>
          <p>{data.name}</p>
          <p>經度：{data.latitude}</p>
          <p>緯度：{data.longitude}</p>
          <button onClick={() => { window.location.reload() }}>reload</button>
        </div>
      }
      <p>{error}</p>
      <h1>{loading && 'Loading...'}</h1>
    </div>
  );
}

export default App;
