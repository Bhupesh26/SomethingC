"use client"; // Marking this as a client-side component

export const Roadmap = () => {
  const phases = [
    {
      title: "💡 IDEAS",
      features: [
        "Pause Game in Singleplayer",
        "Kitchen Fire",
        "Food Poisoning",
        "Toilet Cloggging",
        "Microwave Oven",
        "Onion Rings & Strips",
        "Donuts and Other Bakery Products",
        "Animation Emotes",
        "Order Assignment on Orders Screen",
        "Moving to a different location",
        "Sun Movement & Weathers",
        "Immersive Customers",
        "Self Service",
        "New Gameroad",
        "MetaHuman",
        "VR Integration",
      ],
    },
    {
      title: "📝 TO-DO LIST",
      features: [
        "Restaurant Cleaning",
        "Restaurant Customization",
        "Restaurant Cleaning",
        "AI Restocker",
        "AI Cashier",
        "Lobby Filter",
        "Refilling Soda & Ice Cream Machine",
        "More Character Customization Elements",
        "Trash Bag & Emptying Trash Bin",
        "Pets",
        "Full Controller Support",
      ],
    },
    {
      title: "⌛ IN PROGRESS",
      features: [
        "N/A",
      ],
    },
    {
      title: "🛠️ TESTING",
      features: [
        "N/A",
      ],
    },
    {
      title: "✅ COMPLETED",
      features: [
        "N/A",
      ],
    },
    {
      title: "🆕 RELEASED",
      features: [
        "Drive Thru",
        "AI Server",
        "AI Busser",
        "Customers Order Feedback",
        "Restaurant Name Text Materials",
        "More Meals & Ingredients",
        "FOV Setting 70-110",
        "Coffee Machine",
        "Receipt for trays and bags",
        "Co-op for up to 6 people",
        "Burger labeling",
        "Color Blindness Accessibility",
        "Sprint",
        "Character Customization",
        "Game Difficulty Settings",
        "Restroom",
        "Option to disable collision",
      ],
    },
  ];

  return (
    <div
      id="roadmap"
      className="relative bg-cover bg-center py-16 px-8"
      style={{ backgroundImage: "url('/images/burgbackground.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-cusgray opacity-90"></div>

      {/* Roadmap Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
          ROAD MAP
        </h1>
        

        {/* Centered Timeline */}
        <div className="flex justify-center items-start gap-8 flex-wrap px-4">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="w-[370px] bg-[#0f162a] text-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-center mb-4">{phase.title}</h2>
              <ul className="space-y-2">
                {phase.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-green-400">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
