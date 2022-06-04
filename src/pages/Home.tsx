import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { MlProduct } from "../interfaces/mlProduct";
import { searchProduct } from "../services/mlApi";

type Props = {};

function Home({}: Props) {
  const [inputSearch, setInputSearch] = useState("a");
  const [products, setProducts] = useState<MlProduct[]>([]);
  const [pagination, setPagination] = useState({ offset: 0, limit: 20 });
  useEffect(() => {
    searchProduct(inputSearch, pagination.offset, pagination.limit).then(
      (res) => {
        setProducts(res);
      }
    );
  }, [inputSearch, pagination]);
  return (
    <>
      <Header
        setInput={(e: any) => {
          setInputSearch(e.target.value);
        }}
        value={inputSearch}
      ></Header>
      <div className="flex w-full">
        <div className="m-auto">
          <button
            className="background-blue-500 m-2"
            onClick={() => {
              setPagination({
                offset: pagination.offset - pagination.limit,
                limit: pagination.limit,
              });
            }}
            disabled={pagination.offset === 0}
          >
            anteriores
          </button>
          <button
            onClick={() => {
              setPagination({
                offset: pagination.offset + pagination.limit,
                limit: pagination.limit,
              });
            }}
          >
            siguientes
          </button>
        </div>
      </div>
      {products &&
        products.map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}
    </>
  );
}

export default Home;
