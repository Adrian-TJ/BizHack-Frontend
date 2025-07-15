import { Product } from "@/models/product";
import React from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col align-middle xs:items-center sm:items-left">
        <h2 className="text-md font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-1">{product.category}</p>
      </div>
      <p className="flex text-blue-700 font-bold items-center justify-end">
        ${product.price.toFixed(2)}
      </p>
    </div>
  );
}
