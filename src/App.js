import './App.css';
import Home from './views/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="home" element={<Home />} />

      </Routes>
      <Footer/>
    
     


    </div>
  );
}

export default App;
