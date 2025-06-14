import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);

  const decrement = () => setCounter((prev) => prev - 1);

  return (
    <div className="bg-gray-950 min-h-screen w-full flex justify-center items-center flex-col">
      <div className="max-w-3xl w-full flex flex-col justify-center items-center gap-10 p-5 bg-black rounded-2xl shadow-lg">
        <h1 className="text-6xl text-white">Value: {counter}</h1>

        <div className="flex justify-center items-center gap-5">
          <button
            className="px-4 py-2 bg-green-700 hover:bg-green-800 duration-300 border-none rounded-lg cursor-pointer text-md text-white"
            onClick={increment}
            disabled={counter >= 20}
          >
            Add Value
          </button>
          <button
            className={`px-4 py-2 bg-red-700 hover:bg-red-800 duration-300 border-none rounded-lg cursor-pointer text-md text-white`}
            onClick={decrement}
            disabled={counter === 0}
          >
            Remove Value
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
