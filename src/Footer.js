import React from 'react';
import {Text, Button } from '@chakra-ui/react';
import telega from './telegram.png'; 
import website from './website.png'; 

const Footer = () => {
    const containerStyle = {
        backgroundColor: '#EBECFC', // Замените этот цвет на нужный вам цвет фона
      };
    return (
        <div className='footer'>
            <div className='text_footer'>
                <Text fontSize={30} backgroundColor={"#EBECFC"}>88005553535</Text>
                <Text fontSize={30} backgroundColor={"#EBECFC"}>qwerty1111@gmail.com</Text>
            </div>
            <div className='icon'>
                <a href="https://web.telegram.org/a/#-1001624969604" backgroundColor={"#EBECFC"} target="_blank" rel="noopener noreferrer">
                    <img src={telega} width="100px" backgroundColor={"#EBECFC"} alt="Link to Example" />
                </a>
                <a href="https://polaruniversity.ru/" backgroundColor={"#EBECFC"} target="_blank" rel="noopener noreferrer">
                    <img src={website} width="100px" backgroundColor={"#EBECFC"} alt="Link to Another Example" />
                </a>
            </div>
        </div>
    );
};

export default Footer;