import { useState } from "react";

const portfolioItems = [
  { id: 1, category: "Design", icon: "😊", label: "About Me" },
  { id: 2, category: "Skills", icon: "🧪", label: "Skills" },
  { id: 3, category: "Projects", icon: "🍰", label: "Projects" },
  { id: 4, category: "Music", icon: "🎵", label: "Music" },
  { id: 5, category: "Media", icon: "📼", label: "Media" },
  { id: 6, category: "Food", icon: "🍞", label: "Blog" },
  { id: 7, category: "Portfolio", icon: "💼", label: "Portfolio" },
];

export default function Index() {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (id: number) => {
    setActiveButton(id);
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
          <h1 className="text-5xl md:text-7xl font-bold text-red-500 mb-6 tracking-tight font-comic">
            falan
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed font-comic">
            of ya
          </p>
        </div>

        {/* Container for scattered buttons */}
        <div className="relative w-full max-w-6xl h-96 md:h-[500px]">
          {/* Button 1 - Top Left - Smiley Face */}
          <button
            onClick={() => handleButtonClick(1)}
            className="absolute top-4 left-1/3 w-16 h-16 md:w-20 md:h-20 transition-all duration-300 hover:scale-110 shake-on-hover group"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7131692855d7442a8df38b02d45371ad%2Fc0e5a66fff5840b8b08eed9c2400f9d4?format=webp&width=800"
              alt="Smiley Face"
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 rounded-2xl"
            />
          </button>

          {/* Button 2 - Top Right - Potion */}
          <button
            onClick={() => handleButtonClick(2)}
            className="absolute top-4 right-1/3 w-16 h-16 md:w-20 md:h-20 transition-all duration-300 hover:scale-110 shake-on-hover group"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7131692855d7442a8df38b02d45371ad%2F12d6052df9f04923a1e47068c837b4af?format=webp&width=800"
              alt="Potion"
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 rounded-2xl"
            />
          </button>

          {/* Button 3 - Middle Left - Cake Slice */}
          <button
            onClick={() => handleButtonClick(3)}
            className="absolute top-1/2 left-1/4 w-16 h-16 md:w-20 md:h-20 transition-all duration-300 hover:scale-110 shake-on-hover group -mt-8 md:-mt-10"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7131692855d7442a8df38b02d45371ad%2F6948f913d89b4e26877500f69630773f?format=webp&width=800"
              alt="Cake Slice"
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 rounded-2xl"
            />
          </button>

          {/* Button 4 - Middle Right - Music Note */}
          <button
            onClick={() => handleButtonClick(4)}
            className="absolute top-1/2 right-1/4 w-16 h-16 md:w-20 md:h-20 transition-all duration-300 hover:scale-110 shake-on-hover group -mt-8 md:-mt-10"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7131692855d7442a8df38b02d45371ad%2F04be9eb475d0436badc2cd6e493bf06c?format=webp&width=800"
              alt="Music Note"
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 rounded-2xl"
            />
          </button>

          {/* Button 5 - Bottom Left - Cassette Tape */}
          <button
            onClick={() => handleButtonClick(5)}
            className="absolute bottom-4 left-1/3 w-16 h-16 md:w-20 md:h-20 transition-all duration-300 hover:scale-110 shake-on-hover group"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7131692855d7442a8df38b02d45371ad%2F17cb708c47b943d394f1133e10e83e9e?format=webp&width=800"
              alt="Cassette Tape"
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 rounded-2xl"
            />
          </button>

          {/* Button 6 - Bottom Right - Bread Slice */}
          <button
            onClick={() => handleButtonClick(6)}
            className="absolute bottom-4 right-1/3 w-16 h-16 md:w-20 md:h-20 transition-all duration-300 hover:scale-110 shake-on-hover group"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7131692855d7442a8df38b02d45371ad%2F4528dcd956da4f95992834915cbaac5d?format=webp&width=800"
              alt="Bread Slice"
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 rounded-2xl"
            />
          </button>

          {/* Button 7 - Center - Animated GIF */}
          <button
            onClick={() => handleButtonClick(7)}
            className="absolute top-1/2 left-1/2 w-16 h-16 md:w-20 md:h-20 transition-all duration-300 hover:scale-110 shake-on-hover group -ml-8 md:-ml-10 -mt-8 md:-mt-10"
          >
            <img
              src="https://i.pinimg.com/originals/2b/87/8f/2b878fc08878b8673b9a942a8f5fac55.gif"
              alt="Animated Center"
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 rounded-2xl"
            />
          </button>
        </div>

        {/* Active section indicator */}
        {activeButton && (
          <div className="mt-8 text-center">
            <p className="text-white text-lg font-comic">
              Exploring: <span className="font-semibold text-purple-400">{portfolioItems[activeButton - 1].label}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
