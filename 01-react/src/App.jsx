import CustomComponent from "./CustomComponent";

function App() {
  return (
    <div className="bg-gray-950 min-h-screen w-full flex justify-center items-center flex-col">
      <h1 className="text-6xl text-white">console.log("It's working...")</h1>
      <CustomComponent />
    </div>
  );
}

export default App;
