
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageBase64 from './pages/ImageBase64';
import AssetSearch from './pages/AssetSearch';
import ExcalidrawPage from './pages/ExcalidrawPage';
import AuthConf from './pages/AuthConf';
import TreeNavigationInstance from './components/TreeNavigation';




function App() {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <TreeNavigationInstance />
        <Routes>
          <Route path="/image-base64" element={<ImageBase64 />} />
          <Route path="/asset-search" element={<AssetSearch />} />
          <Route path="/excalidraw" element={<ExcalidrawPage />} />
          <Route path="/tenantAuth" element={<AuthConf />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
