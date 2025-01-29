import React from 'react';

const ServerInfo: React.FC = () => {
  return (
    <div className="text-center mt-8">
      <h2 className="text-3xl font-bold">Server Information</h2>
      <p className="mt-4 text-lg">Server IP: play.arcturus-mc.com</p>
      <button
        className="mt-4 rounded-lg bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() => alert('Connecting to Minecraft Server...')}
      >
        Connect to Server
      </button>
    </div>
  );
};

export default ServerInfo;