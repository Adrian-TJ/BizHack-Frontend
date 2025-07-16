"use client";

import React, { useState } from "react";
import {
  Brain,
  HelpCircle,
  TrendingUp,
  Users,
  Target,
  DollarSign,
  MousePointer,
  BarChart3,
  Settings,
  Bell,
  User,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Calendar,
  Package,
} from "lucide-react";

// Hooks
import { useRouter } from "next/navigation";

// Models
import { Product } from "@/models/product";

// Custom components
import ProductForm from "@/components/productForm";
import ProductCard from "@/components/productCard";
import ClarityAIDashboard from "../dashboard/page";

const ClarityAIGeneration = () => {
  const router = useRouter();

  const [objective, setObjective] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [proudct, setProduct] = useState<Product[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);


  const handleDeleteProduct = (indexToDelete: number) => {
    setProduct(proudct.filter((_, index) => index !== indexToDelete));
  };

const handleGeneratePlan = () => {
  setIsGenerating(true);
  setTimeout(() => {
    setIsGenerating(false);
    setShowResults(true);
    
    // Wait for next frame to ensure DOM is updated
    requestAnimationFrame(() => {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  }, 8000);
};

  const handleViewDeepDive = () => {
    router.push("/weekPlan");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Matching landing page style */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600 mr-2" />
              <a
                className="text-xl font-bold text-gray-900 cursor-pointer"
                onClick={() => router.push("/")}
              >
                ClarityAI
              </a>
              <span className="ml-4 text-gray-600">/ Campaign Generator</span>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
              <Settings className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
              <User className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Create Your Marketing Strategy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let our AI create a comprehensive, explainable marketing plan tailored to your goals. Add products for targeted campaigns or create a general strategy.
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Campaign Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-6 w-6 text-blue-600 mr-2" />
                Campaign Details
              </h2>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="objective"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Marketing Objective
                  </label>
                  <input
                    id="objective"
                    type="text"
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    placeholder="e.g., boost sales, grow awareness, launch new product"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="objective"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Marketing Objective
                  </label>
                  <input
                    id="objective"
                    type="text"
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    placeholder="e.g., boost sales, grow awareness, launch new product"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Budget (USD)
                  </label>
                  <input
                    id="budget"
                    type="number"
                    min={0}
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g., 50000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="duration"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Campaign Timeframe
                  </label>
                  <input
                    id="duration"
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="e.g., 3 months, 6 weeks, Q2 2025"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Products */}
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                    <Package className="h-6 w-6 text-blue-600 mr-2" />
                    Products to Promote
                    <span className="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-normal">
                      Optional
                    </span>
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    Add specific products for targeted recommendations, or skip for general strategy
                  </p>
                </div>
              </div>

              <div className="space-y-4 max-h-60 overflow-y-auto">
                {proudct.length > 0 ? (
                  proudct.map((product, index) => (
                    <ProductCard
                      key={index}
                      product={product}
                      onDelete={() => handleDeleteProduct(index)}
                    />
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-200 rounded-lg">
                    <Package className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                    <p className="font-medium">No products added</p>
                    <p className="text-sm">You can add products for more targeted campaigns</p>
                    <p className="text-xs mt-1 text-gray-400">Or continue without products for general strategy</p>
                  </div>
                )}
              </div>

              <button
                onClick={() => setOpen(true)}
                className="w-full bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <Package className="h-5 w-5" />
                <span>Add Product (Optional)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center mb-8">
          <button
            onClick={handleGeneratePlan}
            disabled={!objective || !budget || !duration || isGenerating}
            className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-12 py-4 rounded-xl text-lg font-bold hover:from-blue-800 hover:to-blue-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-3 mx-auto"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                <span>Generating Strategy...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-6 w-6" />
                <span>Generate Marketing Plan</span>
                <ArrowRight className="h-6 w-6" />
              </>
            )}
          </button>

          {(!objective || !budget || !duration) && (
            <p className="text-sm text-gray-500 mt-3">
              Please fill in the campaign details to continue
            </p>
          )}

          {(objective && budget && duration) && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg max-w-md mx-auto">
              <p className="text-sm text-blue-700">
                ✓ Ready to generate! {proudct.length > 0 ? `Including ${proudct.length} product${proudct.length > 1 ? 's' : ''}` : 'Creating general strategy'}
              </p>
            </div>
          )}
        </div>

        <ProductForm
          open={open}
          setOpen={setOpen}
          onSubmit={(product: Product) => setProduct([...proudct, product])}
        />

        {/* Results Section */}
        {showResults && (
          <div id="results-section" className="space-y-0">
            {/* Success Message */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 text-center my-4">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-100 rounded-full p-3">
                  <Sparkles className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Your Marketing Strategy is Ready!
              </h3>
              <p className="text-gray-600 mb-4">
                AI has analyzed your objectives and created a comprehensive plan with explainable recommendations
              </p>
            </div>

            {/* Quick Overview Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">$156K</h3>
                <p className="text-gray-600">Estimated Cost</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">5.4x ROAS</h3>
                <p className="text-gray-600">Projected return on ad spend</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">$847K</h3>
                <p className="text-gray-600">Estimated Revenue</p>
              </div>
            </div>
            <ClarityAIDashboard />

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-100 rounded-full p-3">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Let's Dive Deeper!
              </h3>
              <p className="text-gray-600 mb-4">
                AI has analyzed your objectives and created a personalized plan with content and explainable recommendations
              </p>
              <button
                onClick={handleViewDeepDive}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center space-x-2 mx-auto"
              >
                <span>View Complete Strategy</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClarityAIGeneration;