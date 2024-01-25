import { useState, useEffect } from "react";

function App() {
  const data = [
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b575e6ff52998f36.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b2226f9efd5548d3.jpg?q=20",
  ];
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex((index + 1) % data.length);
  };
  const handlePrev = () => {
    if (index == 0) setIndex(data.length - 1);
    else setIndex(index - 1);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [index]);
  return (
    <>
      <div className="flex justify-center overflow-hidden">
        <button onClick={handlePrev} className="text-4xl">
          &larr;
        </button>

        <img src={data[index]} className="w-5/6 mx-8" />

        <button onClick={handleNext} className="text-4xl">
          &rarr;
        </button>
      </div>
    </>
  );
}

export default App;
