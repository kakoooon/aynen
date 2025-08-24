import { useState, useRef, useEffect } from "react";

const imageButtons = [
  { id: 1, gradient: "from-purple-500 to-pink-500", icon: "✨", label: "Magic" },
  { id: 2, gradient: "from-blue-500 to-cyan-500", icon: "🌊", label: "Ocean" },
  { id: 3, gradient: "from-green-500 to-emerald-500", icon: "🌿", label: "Nature" },
  { id: 4, gradient: "from-orange-500 to-red-500", icon: "🔥", label: "Fire" },
  { id: 5, gradient: "from-indigo-500 to-purple-500", icon: "🚀", label: "Space" },
  { id: 6, gradient: "from-yellow-500 to-orange-500", icon: "⚡", label: "Energy" },
  { id: 7, gradient: "from-red-500 to-orange-500", icon: "🦠", label: "Center" },
];

export default function Index() {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [audioStarted, setAudioStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Try to start audio when component mounts
  useEffect(() => {
    const tryAutoplay = async () => {
      if (audioRef.current && !audioStarted) {
        try {
          await audioRef.current.play();
          setAudioStarted(true);
          console.log('Autoplay started successfully');
        } catch (error) {
          console.log('Autoplay blocked by browser, will start on user interaction');
        }
      }
    };

    // Small delay to ensure audio element is ready
    const timer = setTimeout(tryAutoplay, 100);
    return () => clearTimeout(timer);
  }, [audioStarted]);

  const startAudio = () => {
    if (!audioStarted && audioRef.current) {
      audioRef.current.play().catch(console.error);
      setAudioStarted(true);
    }
  };

  const handleButtonClick = (id: number) => {
    setActiveButton(id);
    startAudio(); // Fallback: start audio on button click if autoplay failed
    console.log(`Button ${id} clicked!`);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Music */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
      >
        <source src="/finale.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
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
          {/* Button 1 - Top Left */}
          <button
            onClick={() => handleButtonClick(1)}
            className="absolute top-4 left-1/3 w-16 h-16 md:w-20 md:h-20 transition-all duration-300 hover:scale-110 shake-on-hover group"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7131692855d7442a8df38b02d45371ad%2Fb19e2ba5cf8945f1814cda1f9cfba0bf?format=webp&width=800"
              alt="Button icon"
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 rounded-2xl"
            />
          </button>

          {/* Button 2 - Top Right */}
          <button
            onClick={() => handleButtonClick(2)}
            className="absolute top-4 right-1/3 w-16 h-16 md:w-20 md:h-20 transition-all duration-300 hover:scale-110 shake-on-hover group"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7131692855d7442a8df38b02d45371ad%2F1c248b9e352741f190b63e4c8aa05e11?format=webp&width=800"
              alt="Button icon"
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 rounded-2xl"
            />
          </button>

          {/* Button 3 - Middle Left */}
          <button
            onClick={() => handleButtonClick(3)}
            className="absolute top-1/2 left-1/4 w-16 h-16 md:w-20 md:h-20 transition-all duration-300 hover:scale-110 shake-on-hover group -mt-8 md:-mt-10"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7131692855d7442a8df38b02d45371ad%2Fdeb262142b3c4706a1945ce505d676ed?format=webp&width=800"
              alt="Button icon"
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 rounded-2xl"
            />
          </button>

          {/* Button 4 - Middle Right */}
          <button
            onClick={() => handleButtonClick(4)}
            className="absolute top-1/2 right-1/4 w-16 h-16 md:w-20 md:h-20 transition-all duration-300 hover:scale-110 shake-on-hover group -mt-8 md:-mt-10"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7131692855d7442a8df38b02d45371ad%2F7fdcc062dd9a4885b4460fe2f54cb6bb?format=webp&width=800"
              alt="Button icon"
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 rounded-2xl"
            />
          </button>

          {/* Button 5 - Bottom Left */}
          <button
            onClick={() => handleButtonClick(5)}
            className="absolute bottom-4 left-1/3 w-16 h-16 md:w-20 md:h-20 transition-all duration-300 hover:scale-110 shake-on-hover group"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7131692855d7442a8df38b02d45371ad%2F0a61a95462c84ff49456fd512061a3f7?format=webp&width=800"
              alt="Button icon"
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 rounded-2xl"
            />
          </button>

          {/* Button 6 - Bottom Right */}
          <button
            onClick={() => handleButtonClick(6)}
            className="absolute bottom-4 right-1/3 w-16 h-16 md:w-20 md:h-20 transition-all duration-300 hover:scale-110 shake-on-hover group"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7131692855d7442a8df38b02d45371ad%2F932e966608a04a2a91f729ee16b899dc?format=webp&width=800"
              alt="Button icon"
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 rounded-2xl"
            />
          </button>

          {/* Button 7 - Center */}
          <button
            onClick={() => handleButtonClick(7)}
            className="absolute top-1/2 left-1/2 w-16 h-16 md:w-20 md:h-20 transition-all duration-300 hover:scale-110 shake-on-hover group -ml-8 md:-ml-10 -mt-8 md:-mt-10"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F7131692855d7442a8df38b02d45371ad%2F370e1394f04243e4b373db75a2e1c9f5?format=webp&width=800"
              alt="Button icon"
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300 rounded-2xl"
            />
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
