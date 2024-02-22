import { useEffect, useState } from "react";

export default function LoadMore({ limit = 20 }) {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${count * limit}`
      );
      const data = await response.json();
      if (count > 0) {
        setProducts((prevProd) => [...prevProd, ...data.products]);
      } else {
        setProducts(data.products);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <section>
      <h1>Load More Function</h1>
      <div>
        {products.length &&
          products.map((prod) => (
            <div key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />
              <p>{prod.title}</p>
            </div>
          ))}
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <button onClick={() => setCount(count + 1)}>
              Load More Products
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
