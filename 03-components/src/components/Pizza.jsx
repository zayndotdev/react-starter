function Pizza({ name, ingredients, price, photoName }) {
  return (
    <div>
      <img src={photoName} alt={name} />
      <h2>{name}</h2>
      <p>{ingredients}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default Pizza;
