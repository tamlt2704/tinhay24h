import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import News from './pages/News';
import Trend from './pages/Trend';
import Events from './pages/Events';

function App() {
  return (
    <Container className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<News />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/events' element={<Events />}></Route>
          <Route path='/trend' element={<Trend />}></Route>
          <Route path='*' element={<Navigate to='/' />}></Route>
        </Routes>
      </BrowserRouter>    
    </Container>
  );
}

export default App;
