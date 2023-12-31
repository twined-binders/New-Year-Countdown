import { useState } from "react";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";

function App() {
  const [message, setNewMessage] = useState(["Goodbye 2023", "Terimakasih ❤"]);

  const particlesInit = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function remainTime() {
    const newYearDate = new Date("January 1, 2025 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const secondsLeft = newYearDate - currentDate;
    return secondsLeft;
  }
  return (
    <>
      <Particles init={particlesInit} options={{ preset: "fireworks", fpsLimit: 12 }} />
      <div className="flex flex-col justify-center items-center gap-5 min-h-screen ">
        <span className="text-white text-4xl font-bold z-50">
          <Typewriter words={message} loop={false} cursor cursorStyle={"_"} />
        </span>
        <div className="z-50 text-white text-2xl font-bold">
          <Countdown date={Date.now() + remainTime()} onComplete={() => setNewMessage(["Welcome 2024 🎉", "May God Bless This Year"])} />
        </div>
      </div>
    </>
  );
}

export default App;
