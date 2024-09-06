import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserContext from './context/UserContext'
import Container from './Components/Container/Container';
import UserProvider from './context/UserContext';
function App() {

  return (
    <UserProvider>
    <div className='app'>       
    <Container></Container>
    </div>
    </UserProvider>
  );
}

export default App;
