import React from 'react';

const Community: React.FC = () => {
  return (
    <div className="text-center mt-8">
      <h2 className="text-3xl font-bold">Join Our Community</h2>
      <p className="mt-4 text-lg">Join our Discord server and interact with our community and custom bot!</p>
      <a
        href="https://discord.gg/your-invite-link"
        className="mt-4 inline-block rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Join Discord
      </a>
    </div>
  );
};

export default Community;