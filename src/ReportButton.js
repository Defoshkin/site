import React from 'react';
import { Center, Text, Button } from '@chakra-ui/react';

const ReportButton = ({ report, onClick }) => {
  return (
    <Button width={"15em"} height={"7em"} borderRadius={"30px"} backgroundColor={"#EBECFC"} border={"none"} whiteSpace={"normal"} fontSize={"1.4em"} onClick={onClick}>
      {report.name}
    </Button>
  );
};

export default ReportButton;