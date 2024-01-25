import React, { useEffect, useState } from "react";

function Items({ filter }) {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductData(data);
        console.log(productData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-around gap-7 mt-10">
      {productData
        .filter((val) => val.title.toLowerCase().includes(filter.toLowerCase()))
        .map((product) => (
          <div className="w-64 border p-2" key={product.id}>
            <img
              className="w-52 h-52"
              src={product.image}
              alt={product.title}
            />
            <h2 className="font-bold">{product.title}</h2>
            <p>${product.price}</p>
          </div>
        ))}
    </div>
  );
}

export default Items;
