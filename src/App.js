import React from 'react';
import './App.css';
import InfiniteScrollPhotos from './InfiniteScrollPhotos';
import ReactLogo from './logo.svg'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={ReactLogo} className="App-logo" alt="React Logo" />
        <h1>Forever Photos by JR</h1>
      </header>
      <main className="App-main">
        <InfiniteScrollPhotos />
      </main>
      <footer className="App-footer">
        <p>Copyright © 2024 JesseJesse.com</p>
      </footer>
    </div>
  );
}

export default App;

