import Card from "./Card";

const CardsList = () => {
  const categories = ["Primary Color", "Secondary Color", "Tertiary Color"];
  const products = [
    {
      id: 1,
      name: "Turquoise",
      category: categories[0],
      price: 170,
      value: "#1abc9c",
    },
    {
      id: 2,
      name: "Green Sea",
      category: categories[2],
      price: 190,
      value: "#16a085",
    },
    {
      id: 3,
      name: "Sunflower",
      category: categories[1],
      price: 130,
      value: "#f1c40f",
    },
    {
      id: 4,
      name: "Orange",
      category: categories[2],
      price: 80,
      value: "#f39c12",
    },
    {
      id: 5,
      name: "Emerald",
      category: categories[0],
      price: 140,
      value: "#2ecc71",
    },
    {
      id: 6,
      name: "Nephritis",
      category: categories[1],
      price: 110,
      value: "#27ae60",
    },
    {
      id: 7,
      name: "Carrot",
      category: categories[1],
      price: 160,
      value: "#e67e22",
    },
    {
      id: 8,
      name: "Pumpkin",
      category: categories[2],
      price: 120,
      value: "#d35400",
    },
    {
      id: 9,
      name: "Peter River",
      category: categories[2],
      price: 10,
      value: "#3498db",
    },
    {
      id: 10,
      name: "Belize Hole",
      category: categories[0],
      price: 40,
      value: "#2980b9",
    },
    {
      id: 11,
      name: "Alizarin",
      category: categories[1],
      price: 60,
      value: "#e74c3c",
    },
    {
      id: 12,
      name: "Pomegranate",
      category: categories[0],
      price: 30,
      value: "#c0392b",
    },
  ];
  return (
    <div>
      {products &&
        products.map((product) => <Card key={product.id} product={product} />)}
    </div>
  );
};

export default CardsList;
