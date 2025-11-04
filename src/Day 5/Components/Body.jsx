import { useEffect, useState, createContext, useMemo, useRef } from "react";
import product from "../../assets/product.webp";
import { Card } from "./Card";
import a1 from "../../assets/a1.jpeg";
import a2 from "../../assets/a2.webp";
import a3 from "../../assets/a3.jpg";
import a4 from "../../assets/a4.webp";
import { Sellors } from "./Sellors";

export const SellorContext = createContext();

export const Body = ({searchInput}) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const focusRef = useRef(null);
  const prevSearchRef = useRef("");

  const sellorsName = [
    { name: "Simar", img: a1 },
    { name: "Ajay", img: a2 },
    { name: "Varun", img: a3 },
    { name: "Vikas", img: a4 },
  ];

  useEffect(() => {
    focusRef.current?.focus();
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    prevSearchRef.current = search;
    // console.log(prevSearchRef.current)
  }, [search]);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.count > 300
    );
  }, [products, search]);


  const sellorCards = useMemo(() => {
    return sellorsName.map((s, index) => (
      <div
        key={index}
        className="md:flex flex-col md:items-center md:bg-white md:p-4 md:rounded-lg md:shadow-md md:w-[200px] md:hover:bg-pink-300 md:cursor-pointer"
      >
        <img
          src={s.img}
          alt={s.name}
          className="w-32 h-32 object-cover rounded-full"
        />
        <p className="mt-3 text-lg font-semibold">{s.name}</p>
      </div>
    ));
  }, [sellorsName]);

  return (
    <SellorContext.Provider value={sellorsName}>
      <div
        className="md:h-[2900px] md:w-full md:bg-cover md:bg-center md:opacity-75"
        style={{ backgroundImage: `url(${product})` }}
      >
        <h1 className="md:font-bold md:text-7xl md:pt-[60px] md:text-purple-900 text-center">
          Welcome to Product Store
        </h1>

        <div className="text-center mt-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="p-2 border border-gray-400 rounded-md w-80 text-lg"
            ref={searchInput}
          />
        </div>

        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 text-xl col-span-full">
              No product found
            </p>
          )}
        </div>

        {/* Seller Section */}
        <h1 className="md:font-bold md:text-5xl md:mt-[40px] text-center text-pink-800">
          Our Top Sellers of Product Are...
        </h1>
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          {sellorCards}
        </div>
      </div>
    </SellorContext.Provider>
  );
};
