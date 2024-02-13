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
                <div className='textic'>
                    <Text  width={"70%"} backgroundColor={"#EBECFC"} fontSize={'2em'} textIndent={'3em'} textAlign={'justify'}> Лаборатория социально-экономических исследований в Арктике - это научно-исследовательский центр Заполярного государственного университета, специализирующийся на изучении социально-экономического развития арктического региона. Она является одним из ключевых элементов системы научных исследований в России и вносит значительный вклад в разработку стратегий и программ развития Арктики.</Text>
                    <Text width={"70%"} backgroundColor={"#EBECFC"} fontSize={'2em'} textIndent={'3em'} textAlign={'justify'}>Основные направления деятельности лаборатории включают анализ и прогнозирование социально-экономического положения в арктических регионах, изучение проблем и перспектив развития инфраструктуры, исследование вопросов экологии, климата и здоровья населения, а также разработку рекомендаций для органов государственной власти и местного самоуправления.</Text>
                </div>
                
                <img src={dolzhenko} style={{width: '25em', height: '25em', borderRadius: "80px"}}></img>
            </div>
        </div>
    );
};

export default AboutUs;