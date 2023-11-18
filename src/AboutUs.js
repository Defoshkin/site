import React from 'react';
import { Center, Text, Button } from '@chakra-ui/react';
import dolzhenko from './dolzhenko.jpeg'; 
const AboutUs = () => {
    return (
        <div className='about_us'>  
            <Center backgroundColor={"#EBECFC"} marginTop={"30px"}>
                <Text backgroundColor={"#EBECFC"} color={"#0E0E15"} fontSize={"60"}>О нас</Text>
            </Center>
            <div className='DOLZHENKO' >
                <Text width={"50%"} marginLeft={"50px"} backgroundColor={"#EBECFC"} fontSize={20}> А тут опишет, чем занимается наша лаборатория.А тут опишет, чем занимается наша лаборатория.А тут опишет, чем занимается наша лаборатория.А тут опишет, чем занимается наша лаборатория.А тут опишет, чем занимается наша лаборатория.А тут опишет, чем занимается наша лаборатория.А тут опишет, чем занимается наша лаборатория.А тут опишет, чем занимается наша лаборатория.</Text>
                <img src={dolzhenko} style={{width: '400px', height: '400px', marginRight: "50px", borderRadius: "80px"}}></img>
            </div>
        </div>
    );
};

export default AboutUs;