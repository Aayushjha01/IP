import React from 'react';
import { saveAs } from 'file-saver';

const PDFGenerator = ({ pdfPath, pdfIndex }) => {
  const downloadPDF = () => {
    saveAs(pdfPath, `S1Q_generated_${pdfIndex + 1}.pdf`);
  };

  return (
    
    
    <div className='container'>
   
      <div className="card">
      
      <button onClick={downloadPDF}>Download PDF</button>
      </div>
    </div>
   
  );
};

export default PDFGenerator;
