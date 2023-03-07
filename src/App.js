import { Route, Routes } from 'react-router-dom';
import './App.css';
import GamePage from './pages/GamePage/GamePage';
import ResultPage from './pages/ResultPage/ResultPage';
import StartPage from './pages/StartPage/StartPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<StartPage/>} />
        <Route path='/game' element={<GamePage/>} />
        <Route path='/result' element={<ResultPage/>} />
      </Routes>
    </div>
  );
}

export default App;
