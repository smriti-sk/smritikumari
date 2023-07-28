import React from "react";
import Iframe from 'react-iframe';

const PdfViewer = () => {
  return (
    <div id="pdf-viewer">
      <Iframe
        id="pdf"
        src="./SmritiKumariFullStack.pdf"
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default PdfViewer;
