import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import BottomBar from './components/bottomBar';
import Home from './pages/home';
import Explore from './pages/explore';
import Upload from './pages/upload';
import Reels from './pages/reels';
import Profile from './pages/profile';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      <BottomBar />
    </div>
  );
}

export default App;
