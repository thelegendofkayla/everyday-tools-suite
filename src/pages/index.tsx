import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to Everyday Tools Suite</h1>
      <p>Your modular, ad-free dashboard of everyday tools.</p>
      <div className="tool-links">
        <a href="/tools/qr-code" className="tool-card">QR Code Generator</a>
        <a href="/tools/tip-calculator" className="tool-card">Tip Calculator</a>
        <a href="/tools/emoji-library" className="tool-card">Emoji Library</a>
      </div>
    </div>
  );
};

export default Home;
