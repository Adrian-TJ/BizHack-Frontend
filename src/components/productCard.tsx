import { Product } from "@/models/product";
import { X } from "lucide-react";
import React from "react";

interface ProductCardProps {
  product: Product;
  onDelete?: () => void;
}

export default function ProductCard({ product, onDelete }: ProductCardProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 relative group">
      {/* Delete button */}
      {onDelete && (
        <button
          onClick={onDelete}
          className="absolute -middle-2 -right-0 bg-gray-500 hover:bg-gray-700 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
        >
          <X className="h-4 w-4" />
        </button>
      )}
      
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