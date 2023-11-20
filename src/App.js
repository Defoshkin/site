import './App.css';
import { Center, Text, Button } from '@chakra-ui/react';
import MainPage from './MainPage';
import AboutUs from './AboutUs';
import Otchet from './Otchet';
import { useState } from 'react';


function App() {
  
  return (
    <div className="App">
      <MainPage/>
      <AboutUs/>
      <Otchet/>
      
    </div>
  );
}

export default App;
