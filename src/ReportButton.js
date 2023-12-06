import React from 'react';
import { Center, Text, Button } from '@chakra-ui/react';

const ReportButton = ({ report, onClick }) => {
  return (
    <Button whiteSpace={'normal'} className='report_button' onClick={onClick}>
      {report.name}
    </Button>
  );
};

export default ReportButton;