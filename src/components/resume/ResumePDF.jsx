import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pdfUrl = 'path/to/your/pdf';

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = offset => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <div>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button
          onClick={previousPage}
          disabled={pageNumber <= 1}>
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={pageNumber >= numPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Resume;
