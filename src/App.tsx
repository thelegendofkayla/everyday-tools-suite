import React from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/About';
import QRCodeGenerator from './pages/tools/Qr-code';
import TipCalculator from './pages/tools/Tip-calc';
import EmojiLibrary from './pages/tools/Emoji-lib';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools/qr-code" element={<QRCodeGenerator />} />
          <Route path="/tools/emoji-library" element={<EmojiLibrary />} />
          <Route path="/tools/tip-calculator" element={<TipCalculator />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
