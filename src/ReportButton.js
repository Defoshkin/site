import React from 'react';
import { Center, Text, Button } from '@chakra-ui/react';

const ReportButton = ({ report, onClick }) => {
  return (
    <Button width={"205px"} height={"126px"} borderRadius={"30px"} backgroundColor={"#EBECFC"} border={"none"} whiteSpace={"normal"} onClick={onClick}>
      {report.name}
    </Button>
  );
};

export default ReportButton;