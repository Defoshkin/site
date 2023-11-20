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
              <Button marginTop={"30px"} backgroundColor={"#F1EFEA"} width={"40%"} height={"50px"} fontSize={"20"} borderRadius={"30"} border={'none'}> Заказать отчет </Button>
          </div>
          <svg className='lines' width="624" height="1091" viewBox="0 0 624 1091" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.99506" y1="-1.50657" x2="624.995" y2="823.493" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="235.396" y1="310.714" x2="3.396" y2="1089.71" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="109.382" y1="738.241" x2="216.382" y2="1074.24" stroke="#F7F7FF" stroke-width="5"/>
            <path d="M149.5 863.5L434.5 896.5" stroke="#F7F7FF" stroke-width="5"/>
            <path d="M151.5 859.505L482.5 636.5" stroke="#F7F7FF" stroke-width="5"/>
            <path d="M269.523 1081.15L569 752" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="216.353" y1="383.154" x2="340.353" y2="728.154" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="361.803" y1="477.807" x2="621.803" y2="-1.19264" stroke="#F7F7FF" stroke-width="5"/>
            <path d="M627.115 583.781L473 268.662" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="402.564" y1="402.563" x2="309.564" y2="0.563495" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="471.289" y1="1.00556" x2="366.289" y2="240.006" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="126.662" y1="161.888" x2="317.662" y2="40.8881" stroke="#F7F7FF" stroke-width="5"/>
            <line x1="380.808" y1="957.634" x2="623.808" y2="1040.63" stroke="#F7F7FF" stroke-width="5"/>
          </svg>

        </div>

      </div>
        </div>
    );
};

export default MainPage;