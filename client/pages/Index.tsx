import { useState } from "react";

const imageButtons = [
  { id: 1, gradient: "from-purple-500 to-pink-500", icon: "✨", label: "Magic" },
  { id: 2, gradient: "from-blue-500 to-cyan-500", icon: "🌊", label: "Ocean" },
  { id: 3, gradient: "from-green-500 to-emerald-500", icon: "🌿", label: "Nature" },
  { id: 4, gradient: "from-orange-500 to-red-500", icon: "🔥", label: "Fire" },
  { id: 5, gradient: "from-indigo-500 to-purple-500", icon: "🚀", label: "Space" },
  { id: 6, gradient: "from-yellow-500 to-orange-500", icon: "⚡", label: "Energy" },
];

export default function Index() {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (id: number) => {
    setActiveButton(id);
    // Add any action you want when button is clicked
    console.log(`Button ${id} clicked!`);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-red-500 mb-6 tracking-tight font-gothic">
            Kakoon
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed font-gothic">
            Viruses at a reasonable price
          </p>
        </div>

        {/* Container for scattered buttons */}
        <div className="relative w-full max-w-6xl h-96 md:h-[500px]">
          {/* Button 1 - Top Left */}
          <button
            onClick={() => handleButtonClick(1)}
            className={`absolute top-0 left-8 md:left-16 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${imageButtons[0].gradient} shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-purple-500/25 shake-on-hover flex items-center justify-center text-2xl md:text-3xl group`}
          >
            <span className="group-hover:scale-125 transition-transform duration-300">
              {imageButtons[0].icon}
            </span>
          </button>

          {/* Button 2 - Top Right */}
          <button
            onClick={() => handleButtonClick(2)}
            className={`absolute top-8 right-8 md:right-16 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${imageButtons[1].gradient} shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-blue-500/25 shake-on-hover flex items-center justify-center text-2xl md:text-3xl group`}
          >
            <span className="group-hover:scale-125 transition-transform duration-300">
              {imageButtons[1].icon}
            </span>
          </button>

          {/* Button 3 - Middle Left */}
          <button
            onClick={() => handleButtonClick(3)}
            className={`absolute top-1/2 left-0 md:left-8 transform -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${imageButtons[2].gradient} shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/25 shake-on-hover flex items-center justify-center text-2xl md:text-3xl group`}
          >
            <span className="group-hover:scale-125 transition-transform duration-300">
              {imageButtons[2].icon}
            </span>
          </button>

          {/* Button 4 - Middle Right */}
          <button
            onClick={() => handleButtonClick(4)}
            className={`absolute top-1/2 right-0 md:right-8 transform -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${imageButtons[3].gradient} shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-red-500/25 shake-on-hover flex items-center justify-center text-2xl md:text-3xl group`}
          >
            <span className="group-hover:scale-125 transition-transform duration-300">
              {imageButtons[3].icon}
            </span>
          </button>

          {/* Button 5 - Bottom Left */}
          <button
            onClick={() => handleButtonClick(5)}
            className={`absolute bottom-8 left-16 md:left-24 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${imageButtons[4].gradient} shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-indigo-500/25 shake-on-hover flex items-center justify-center text-2xl md:text-3xl group`}
          >
            <span className="group-hover:scale-125 transition-transform duration-300">
              {imageButtons[4].icon}
            </span>
          </button>

          {/* Button 6 - Bottom Right */}
          <button
            onClick={() => handleButtonClick(6)}
            className={`absolute bottom-0 right-16 md:right-24 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${imageButtons[5].gradient} shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-yellow-500/25 shake-on-hover flex items-center justify-center text-2xl md:text-3xl group`}
          >
            <span className="group-hover:scale-125 transition-transform duration-300">
              {imageButtons[5].icon}
            </span>
          </button>
        </div>

        {/* Active button indicator */}
        {activeButton && (
          <div className="mt-8 text-center">
            <p className="text-white text-lg">
              You clicked: <span className="font-semibold text-purple-400">{imageButtons[activeButton - 1].label}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
