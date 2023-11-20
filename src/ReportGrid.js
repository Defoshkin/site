import React from 'react';
import ReportButton from './ReportButton';

const ReportGrid = ({ reports, onReportClick }) => {
  return (
    <div className="report-grid">
      {reports.map((report, index) => (
        <ReportButton key={index} report={report} onClick={() => onReportClick(report)} />
      ))}
    </div>
  );
};

export default ReportGrid;