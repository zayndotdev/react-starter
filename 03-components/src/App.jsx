import pizzaData from "./constants/constants.js";
import Pizza from "./components/Pizza.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen w-full  bg-neutral-900 flex justify-center items-start flex-col gap-5 text-white p-10">
        {pizzaData.map((pizza, index) => (
          <Pizza
            key={index}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.soldOut ? "Sold Out" : pizza.price}
            photoName={pizza.photoName}
          />
        ))}
      </div>
    </>
  );
}

export default App;
