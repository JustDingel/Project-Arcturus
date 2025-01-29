import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import ServerInfo from './components/ServerInfo';
import Community from './components/Community';
import Quests from './components/Quests';
import Leaderboard from './components/Leaderboard';
import Shop from './components/Shop';
import Support from './components/Support';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/server-info" element={<ServerInfo />} />
            <Route path="/community" element={<Community />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;