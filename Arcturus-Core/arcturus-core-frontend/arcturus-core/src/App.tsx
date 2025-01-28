import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold">Welcome to Arcturus</h1>
        <p className="mt-4 text-lg">Your journey begins here.</p>
        <div className="mt-6">
          <button
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setCount(count + 1)}
          >
            Click Me
          </button>
          <p className="mt-2">You've clicked {count} times.</p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Arcturus Discord Bot</h2>
          <p className="mt-2 text-lg">Join our Discord server and interact with our custom bot!</p>
          <a
            href="https://discord.gg/your-invite-link"
            className="mt-4 inline-block rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Join Discord
          </a>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Arcturus Minecraft Server</h2>
          <p className="mt-2 text-lg">Join our Minecraft server and start your adventure!</p>
          <p className="mt-2 text-lg">Server IP: play.arcturus-mc.com</p>
          <button
            className="mt-4 rounded-lg bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => alert('Connecting to Minecraft Server...')}
          >
            Connect to Server
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;