import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/sidebar/Sidebar';
import Main from './Components/Main/Main';
import Context from './context/Context';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
        {/* <BrowserRouter basename="/">
        <Routes>
          <Route path='/' element={} ></Route>

        </Routes>
       
        </BrowserRouter> */}

        <Context>
        <Sidebar></Sidebar>
        <Main></Main>
        </Context>

    </>
  );
}

export default App;
