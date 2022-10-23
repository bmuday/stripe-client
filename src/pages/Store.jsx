import { useState, useEffect } from "react";
import CardsList from "../components/CardsList";
import Cart from "../components/Cart";
import CartIcon from "../components/CartIcon";

const Store = () => {
  const categories = ["Primary Color", "Secondary Color", "Tertiary Color"];
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [displayCart, setDisplayCart] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Turquoise",
      category: categories[0],
      price: 170,
      value: "#1abc9c",
      count: 0,
    },
    {
      id: 2,
      name: "Green Sea",
      category: categories[2],
      price: 190,
      value: "#16a085",
      count: 0,
    },
    {
      id: 3,
      name: "Sunflower",
      category: categories[1],
      price: 130,
      value: "#f1c40f",
      count: 0,
    },
    {
      id: 4,
      name: "Orange",
      category: categories[2],
      price: 80,
      value: "#f39c12",
      count: 0,
    },
    {
      id: 5,
      name: "Emerald",
      category: categories[0],
      price: 140,
      value: "#2ecc71",
      count: 0,
    },
    {
      id: 6,
      name: "Nephritis",
      category: categories[1],
      price: 110,
      value: "#27ae60",
      count: 0,
    },
    {
      id: 7,
      name: "Carrot",
      category: categories[1],
      price: 160,
      value: "#e67e22",
      count: 0,
    },
    {
      id: 8,
      name: "Pumpkin",
      category: categories[2],
      price: 120,
      value: "#d35400",
      count: 0,
    },
    {
      id: 9,
      name: "Peter River",
      category: categories[2],
      price: 10,
      value: "#3498db",
      count: 0,
    },
    {
      id: 10,
      name: "Belize Hole",
      category: categories[0],
      price: 40,
      value: "#2980b9",
      count: 0,
    },
    {
      id: 11,
      name: "Alizarin",
      category: categories[1],
      price: 60,
      value: "#e74c3c",
      count: 0,
    },
    {
      id: 12,
      name: "Pomegranate",
      category: categories[0],
      price: 30,
      value: "#c0392b",
      count: 0,
    },
  ]);

  const handleCount = (id) => {
    products.forEach((element) => {
      if (element.id === id) {
        element.count += 1;
      }
    });
    setProducts([...products]);
  };

  const removeFromCart = (id) => {
    products.forEach((element) => {
      if (element.id === id) {
        element.count = 0;
      }
    });
    setProducts([...products]);
  };

  useEffect(() => {
    let selectedProducts = products.filter((product) => product.count > 0);
    setTotalCount(() => {
      let total = 0;
      selectedProducts.forEach((product) => (total += product.count));
      return total;
    });
    if (selectedProducts.length <= 6)
      setSelectedProducts([...selectedProducts]);
  }, [products]);

  const onDisplayCart = () => {
    setDisplayCart(!displayCart);
  };

  return (
    <div className="store__container">
      <CartIcon totalCount={totalCount} onDisplayCart={onDisplayCart} />
      <Cart
        total={100}
        selectedProducts={selectedProducts}
        onRemoveFromCart={removeFromCart}
        displayCart={displayCart}
      />
      <CardsList
        products={products}
        onCount={handleCount}
        onRemoveFromCart={removeFromCart}
      />
    </div>
  );
};

export default Store;
