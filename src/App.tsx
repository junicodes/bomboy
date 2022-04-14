import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.scss';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';

function App() {
  return (
    <div data-testid="app-load" className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
