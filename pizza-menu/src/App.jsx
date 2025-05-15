import pizzaData from "./data";

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Fast React Pizza Co</h1>
      </div>
      <div className="menu">
        <h2>Our Menu</h2>
        <p>
          Authentic Italian cuisine, 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
      </div>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
            <img src={pizza.photoName} alt="#" />
            <div>
              <h3>{pizza.name}</h3>
              <p>{pizza.ingredients}</p>
              <span>{pizza.price}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="footer">
        <div className="order">
          <p>We're open from 12:00 to 22:00, Come visit us order online</p>
          <button className="btn">Order</button>
        </div>
      </div>
    </div>
  );
};

export default App;
