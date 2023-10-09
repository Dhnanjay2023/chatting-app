import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Meet from './component/Meet/Meet';
import Chat from './component/Chatt/Chat';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Meet />} />
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
