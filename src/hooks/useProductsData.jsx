import { useState, useEffect } from "react";

export default function useProductsData(category) {
  const [productsData, setProductsData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const encodedCategoryName = encodeURIComponent(category);

  const url = category === "all" ? "https://fakestoreapi.com/products" : `https://fakestoreapi.com/products/category/${encodedCategoryName}`;

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url, { mode: "cors" });
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        let actualData = await response.json();
        setProductsData(actualData);
        setError(null);
      } catch (error) {
        setError(error.message);
        setProductsData(null);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [encodedCategoryName, url]);

  return { productsData, error, loading };
}
