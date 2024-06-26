import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface Advice {
  id: number;
  advice: string;
}

function App() {
  const [advice, setAdvice] = useState<Advice>({
    id: 0,
    advice: "",
  });

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setAdvice(res.data.slip);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = () => {
    fetchAdvice();
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  console.log(advice);

  return (
    <div className="bg-darkBlue min-h-screen flex justify-center items-center">
      <div className="space-y-4 bg-darkGrayishBlue flex flex-col w-1/4 items-center p-10 rounded-lg relative">
        <span className="text-neonGreen manrope tracking-[4px] font-medium">
          ADVICE #{advice.id}
        </span>
        <span className="text-lightCyan manrope text-[28px] font-bold text-center">
          &ldquo;{advice.advice}&rdquo;
        </span>
        <img
          src="./images/pattern-divider-desktop.svg"
          className="pb-4"
          alt=""
        />
        <button
          onClick={() => handleClick()}
          className="absolute -bottom-8 bg-neonGreen p-4 rounded-full hover:shadow-[0_2px_30px_2px_rgba(42,224,149,0.7)]"
        >
          <img src="./images/icon-dice.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
