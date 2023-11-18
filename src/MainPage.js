import React from 'react';
import { Center, Text, Button } from '@chakra-ui/react';

const MainPage = () => {
    return (
        <div>
            <div className='main_page'>
        <div className='main'>
          <div className='pustota'/>
          <div className='oglavlenie'> 
              <Text backgroundColor={"#4856DC"} color={"#F1EFEA"} fontSize={"60"}>Лаборатория</Text>
              <Text backgroundColor={"#4856DC"} color={"#F1EFEA"} fontSize={"60"}>социально-экономических</Text>
              <Text backgroundColor={"#4856DC"} color={"#F1EFEA"} fontSize={"60"}>исследований ЗГУ</Text>
              <Button marginTop={"30px"} backgroundColor={"#F1EFEA"} width={"40%"} height={"50px"} fontSize={"20"} borderRadius={"30"}> Заказать отчет </Button>
          </div>
          <svg className='lines' width="624" height="836" viewBox="0 0 624 836" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.79136" y1="-1.74385" x2="625.791" y2="639.256" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="264.379" y1="268.768" x2="82.3792" y2="832.768" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="234.363" y1="524.184" x2="340.363" y2="831.184" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="285.288" y1="676.517" x2="570.288" y2="709.517" stroke="#F7F7FF" stroke-width="5"/>
            <path d="M289 677L522 530.495" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="478.984" y1="834.522" x2="621.984" y2="639.522" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="183.082" y1="522.501" x2="520.082" y2="533.501" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="336.075" y1="343.404" x2="622.075" y2="-1.59551" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="621.742" y1="417.074" x2="495.742" y2="152.074" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="385.586" y1="283.648" x2="309.586" y2="0.648404" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="471.259" y1="1.07157" x2="369.259" y2="216.072" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="145.671" y1="148.883" x2="317.671" y2="40.8828" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="417.927" y1="427.501" x2="623.927" y2="421.501" stroke="#F7F7FF" stroke-width="5"/>
          </svg>
        </div>

      </div>
        </div>
    );
};

export default MainPage;