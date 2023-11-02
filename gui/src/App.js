import './App.css';
import "7.css/dist/7.css";

import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ImageBase64 from './pages/ImageBase64';
import MyWindow from './components/MyWindow';
import AssetSearch from './pages/AssetSearch';

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MyWindow/>} />
        <Route path="/image-base64" element={<ImageBase64/>} />
        <Route path="/asset-search" element={<AssetSearch/>} />

      </Routes>
    </div>
  </Router>
  
  );
}

export default App;
