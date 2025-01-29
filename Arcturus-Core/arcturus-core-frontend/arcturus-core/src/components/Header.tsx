import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-primary p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Arcturus RPG</h1>
        <div>
          <Link to="/" className="mx-2 text-white">Home</Link>
          <Link to="/about" className="mx-2 text-white">About</Link>
          <Link to="/server-info" className="mx-2 text-white">Server Info</Link>
          <Link to="/community" className="mx-2 text-white">Community</Link>
          <Link to="/quests" className="mx-2 text-white">Quests</Link>
          <Link to="/leaderboard" className="mx-2 text-white">Leaderboard</Link>
          <Link to="/shop" className="mx-2 text-white">Shop</Link>
          <Link to="/support" className="mx-2 text-white">Support</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;