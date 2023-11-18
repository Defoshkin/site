import './App.css';
import { Center, Text, Button } from '@chakra-ui/react';
import MainPage from './MainPage';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="App">
      <MainPage/>
      <AboutUs/>
      <iframe title="Report Section" width="1000" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiMGU0ZmEyN2QtNzNmZi00NzMzLWExYjktODVhMjY2ZDQyMTdjIiwidCI6ImU0YTFjYTRmLTFmNTktNDdhZS1iOTMzLWFlOTBkNzJlY2Q2MiIsImMiOjl9" frameborder="0" allowFullScreen="true"></iframe>
    </div>
  );
}

export default App;
