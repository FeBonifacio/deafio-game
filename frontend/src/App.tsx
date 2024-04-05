// Arquivo App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe BrowserRouter e Routes
import "./global.css";
import CardGames from "./pages/home";
import Header from "./components/Header";
import CreateGamePage from "./pages/create/index";
import EditGamePage from './pages/edit';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes> 
          <Route path="/" element={<CardGames />} />  
          <Route path="/create" element={<CreateGamePage />} /> 
          <Route path="/edit" element={<EditGamePage />} />
        </Routes> 
      </Router>
      <Footer />
    </>
  );
}

export default App;
