import React from 'react';
import PDFGenerator from './PDFGenerator';
import './App.css'

const App = () => {
  const pdfPaths = [
   './S1.pdf',
   './S2.pdf'
  ];

  return (
    <div>
  
    <div className="marquee-container">
    <h1 className="glow">
      CLICK ON DOWNLOAD BUTTON TO DOWNLOAD THE CONTENT
    </h1>
  </div>
  
      {pdfPaths.map((pdfPath, index) => (
        <PDFGenerator key={index} pdfPath={pdfPath} pdfIndex={index} />
      ))}
    </div>
  );
};

export default App;
