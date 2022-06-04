import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { MlProduct } from "../interfaces/mlProduct";
import { searchProduct } from "../services/mlApi";

type Props = {};

function Home({}: Props) {
  const [inputSearch, setInputSearch] = useState("a");
  const [products, setProducts] = useState<MlProduct[]>([]);
  useEffect(() => {
    searchProduct(inputSearch).then((res) => {
      setProducts(res);
      console.log(products);
      
    });
  }, [inputSearch]);
  return (
    <>
      <Header
        setInput={(e: any) => {
          setInputSearch(e.target.value);
        }}
        value={inputSearch}
      ></Header>
      {products && products.map((product) => (
        <ProductCard product={product}></ProductCard>
      ))}
    </>
  );
}

export default Home;
