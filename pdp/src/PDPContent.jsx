import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { getProductById, currency } from "home/products";
import { useParams } from "react-router-dom";

const PDPContent = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then((product) => setProduct(product));
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <img src={product.image} alt={product.name} />
      <div>
        <div className="flex font-bold text-3xl">
          <div className="flex-grow">{product.name}</div>
          <div className="flex-end">{currency.format(product.price)}</div>
        </div>
        <div className="mt-10">{product.description}</div>
        <div className="mt-10 text-sm">{product.longDescription}</div>
      </div>
    </div>
  );
};

export default PDPContent;
