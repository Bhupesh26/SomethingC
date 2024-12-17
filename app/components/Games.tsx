import React from "react";

export const Games = () => {
  return (
    <div
      id="games"
      className="relative inset-0 bg-cover bg-center p-20"
      style={{ backgroundImage: "url('/images/haha.jpg')" }}
    >
      {/* Quantum Vanguard Controller Card */}
      <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 mt-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="flex-1 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fast Food Simulator
            </h2>
            <h3 className="text-2xl md:text-2xl font-bold mb-4">- Noceiling Games</h3>
            <p className="text-gray-400 mb-6">
              Play solo or co-op with up to 6 players. Open your single-player session to other players and friends to play together. Or you can join a game from the lobby and start serving fast food with others via voice and text chat.
            </p>
            <div className="flex items-center gap-4">
              {/* Steam button with logo */}
              <a
                href="https://store.steampowered.com/app/2916430/Fast_Food_Simulator/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition"
              >
                {/* Steam Logo */}
                <img
                  src="/images/steam.png" // Replace with your actual path to the Steam logo
                  alt="Steam Logo"
                  className="w-6 h-6 mr-2" // Adjust size and margin as needed
                />
                Buy Now →
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src="/images/restaurantinsidework.jpg" /* Replace with your image path */
              alt="Quantum Vanguard Gaming Controller"
              className="w-full max-w-sm rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
