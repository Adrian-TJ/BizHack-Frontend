import React from "react";
import { X, Package, DollarSign, Tag } from "lucide-react";
import { Product } from "@/models/product";

interface ProductFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmit: (product: Product) => void;
}

export default function ProductForm({
  open,
  setOpen,
  onSubmit,
}: ProductFormProps) {
  const [product, setProduct] = React.useState<Product>({
    name: "",
    price: 0,
    category: "",
  });

  const handleSubmit = () => {
    if (product.name && product.price > 0 && product.category) {
      onSubmit(product);
      setOpen(false);
      // Reset form
      setProduct({ name: "", price: 0, category: "" });
    }
  };

  const handleClose = () => {
    setOpen(false);
    // Reset form when closing
    setProduct({ name: "", price: 0, category: "" });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 rounded-t-2xl relative">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-blue-100 hover:text-white transition-colors p-1 rounded-full hover:bg-blue-700"
          >
            <X className="h-5 w-5" />
          </button>
          <h1 className="text-2xl font-bold mb-2">Add New Product</h1>
          <p className="text-blue-100 text-sm">
            Enter your product details below
          </p>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          {/* Product Name */}
          <div className="space-y-2">
            <div className="block text-sm font-semibold text-gray-900 mb-2">
              <div className="flex items-center space-x-2">
                <Package className="h-4 w-4 text-blue-600" />
                <span>Product Name</span>
              </div>
            </div>
            <input
              type="text"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              placeholder="e.g., Hydration Face Serum, Hair Brush"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-gray-50 focus:bg-white"
            />
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="block text-sm font-semibold text-gray-900 mb-2">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4 text-blue-600" />
                <span>Price</span>
              </div>
            </div>
            <input
              type="number"
              min="0"
              step="1"
              value={product.price}
              onChange={(e) =>
                setProduct({
                  ...product,
                  price: parseFloat(e.target.value) || 0,
                })
              }
              placeholder="e.g., 19.99, 29.99"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-gray-50 focus:bg-white"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <div className="block text-sm font-semibold text-gray-900 mb-2">
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4 text-blue-600" />
                <span>Category</span>
              </div>
            </div>
            <input
              type="text"
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
              placeholder="e.g., Skincare, Haircare"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-gray-50 focus:bg-white"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Add Product
            </button>
            <button
              onClick={handleClose}
              className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors border border-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
