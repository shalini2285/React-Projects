
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Component/Form';
import Api from './Component/Api';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
      {/* <Route path='/' element={<Form />} /> */}
      <Route path='/api' element={<Api />} />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
