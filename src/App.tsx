import { Container } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Title from './components/Title';
import Home from './pages/Home';
import Song from './pages/Song';

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Title>Musixly</Title>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:songId" element={<Song />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
