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
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Hooks
import { useRouter } from "next/navigation";

// Models
import { Product } from "@/models/product";

// Custom components
import ProductForm from "@/components/productForm";
import ProductCard from "@/components/productCard";

const ClarityAIDashboard = () => {
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

  // Sample data for visualizations
  const contentTypeData = [
    {
      name: "Video",
      value: 25,
      color: "#002C5F",
      tooltip: "Video prioritized due to higher engagement with Gen Z",
    },
    {
      name: "Carousel",
      value: 18,
      color: "#009FDB",
      tooltip: "Carousel ads show 30% higher CTR for product showcases",
    },
    {
      name: "Static Image",
      value: 15,
      color: "#4A90E2",
      tooltip: "Cost-effective for brand awareness campaigns",
    },
    {
      name: "Influencer Post",
      value: 12,
      color: "#7BB3F0",
      tooltip: "Leverages social proof for millennial audience",
    },
    {
      name: "Story",
      value: 10,
      color: "#A8D0FF",
      tooltip: "High engagement for time-sensitive promotions",
    },
    {
      name: "Reel",
      value: 8,
      color: "#C4E0FF",
      tooltip: "Trending format for younger demographics",
    },
    {
      name: "Blog",
      value: 5,
      color: "#E0F0FF",
      tooltip: "Supports SEO and thought leadership",
    },
    {
      name: "Live Session",
      value: 4,
      color: "#F0F8FF",
      tooltip: "Builds authentic connection with audience",
    },
    {
      name: "UGC",
      value: 2,
      color: "#F8FCFF",
      tooltip: "Authentic content drives trust",
    },
    {
      name: "Branded Content",
      value: 1,
      color: "#FCFEFF",
      tooltip: "Premium placement for brand building",
    },
  ];

  const channelMixData = [
    { name: "Meta", value: 30, color: "#002C5F" },
    { name: "Google Search", value: 25, color: "#009FDB" },
    { name: "YouTube", value: 15, color: "#4A90E2" },
    { name: "Email", value: 10, color: "#7BB3F0" },
    { name: "LinkedIn", value: 8, color: "#A8D0FF" },
    { name: "TikTok", value: 7, color: "#C4E0FF" },
    { name: "Twitter", value: 3, color: "#E0F0FF" },
    { name: "SMS", value: 2, color: "#F0F8FF" },
  ];

  const audienceData = [
    { segment: "25-34 Urban Millennials", value: 35, category: "Demographics" },
    {
      segment: "35-44 Suburban Professionals",
      value: 28,
      category: "Demographics",
    },
    { segment: "18-24 Gen Z Students", value: 20, category: "Demographics" },
    { segment: "High-Income Households", value: 40, category: "Income" },
    { segment: "Mid-Income Families", value: 35, category: "Income" },
    {
      segment: "Eco-Conscious Consumers",
      value: 45,
      category: "Psychographics",
    },
    { segment: "Tech Early Adopters", value: 30, category: "Psychographics" },
  ];

  const kpiData = [
    {
      metric: "Campaign Count",
      value: "12",
      confidence: "95%",
      icon: BarChart3,
    },
    {
      metric: "Estimated Revenue",
      value: "$847K",
      confidence: "82%",
      icon: DollarSign,
    },
    {
      metric: "Estimated Cost",
      value: "$156K",
      confidence: "88%",
      icon: TrendingUp,
    },
    { metric: "ROAS", value: "5.4x", confidence: "79%", icon: Target },
    { metric: "CTR", value: "3.4%", confidence: "78%", icon: MousePointer },
    { metric: "CPA", value: "$24.50", confidence: "81%", icon: Users },
  ];

  const calendarData = [
    { month: "Month 1", video: 8, carousel: 6, static: 4, influencer: 3 },
    { month: "Month 2", video: 10, carousel: 7, static: 5, influencer: 4 },
    { month: "Month 3", video: 7, carousel: 5, static: 6, influencer: 5 },
  ];

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active: boolean;
    payload: Array<{
      name: string;
      value: number;
      color: string;
      tooltip?: string;
    }>;
  }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900">{data.name}</p>
          <p className="text-blue-600">{data.value}%</p>
          {data.tooltip && (
            <p className="text-sm text-gray-600 mt-1">{data.tooltip}</p>
          )}
        </div>
      );
    }
    return null;
  };

  const handleGeneratePlan = () => {
    setIsGenerating(true);
    // Simulate AI generation process
    setTimeout(() => {
      setIsGenerating(false);
      setShowResults(true);
    }, 3000);
  };

  const handleViewDeepDive = () => {
    router.push("/chat");
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
          <div className="space-y-8">
            {/* Success Message */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 text-center">
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
              <button
                onClick={handleViewDeepDive}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center space-x-2 mx-auto"
              >
                <span>View Complete Strategy</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Overview Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">12 Campaigns</h3>
                <p className="text-gray-600">Optimized across multiple channels</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">5.4x ROAS</h3>
                <p className="text-gray-600">Projected return on ad spend</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3 Months</h3>
                <p className="text-gray-600">Strategic timeline breakdown</p>
              </div>
            </div>

            {/* Preview Section with Charts */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Strategy Preview
              </h2>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Content Type Distribution */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Content Type Distribution
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={contentTypeData.slice(0, 6)}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {contentTypeData.slice(0, 6).map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip payload={[]} active />} />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Channel Mix */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Channel Mix
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={channelMixData.slice(0, 6)}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {channelMixData.slice(0, 6).map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-4">
                  This is just a preview. Get the complete strategy with detailed explanations.
                </p>
                <button
                  onClick={handleViewDeepDive}
                  className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-3 rounded-lg hover:from-blue-800 hover:to-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 mx-auto"
                >
                  <span>View Complete Analysis</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClarityAIDashboard;