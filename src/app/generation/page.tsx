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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center hover:pointer">
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
        {/* Header Inputs */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Marketing Campaign Plan
          </h1>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="objective"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                What is your marketing objective?
              </label>
              <input
                id="objective"
                type="text"
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                placeholder="e.g., boost sales, grow awareness"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Budget
              </label>
              <input
                id="budget"
                type="number"
                min={0}
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Enter budget amount"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="objective"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Campaing time frame?
              </label>
              <input
                id="objective"
                type="text"
                min={0}
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g., 3 months, 6 weeks"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Product Inputs */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Campaign Products
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 pb-6">
            {proudct.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
            {proudct.length === 0 && (
              <ProductCard
                product={{ name: "Your Product", price: 100, category: "N/A" }}
              />
            )}
          </div>
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
          >
            Add Product
          </button>
        </div>

        <ProductForm
          open={open}
          setOpen={setOpen}
          onSubmit={(product: Product) => setProduct([...proudct, product])}
        />

        {/* Section 1: Content Type Distribution */}
        {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Content Type Distribution
              </h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={contentTypeData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {contentTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip payload={[]} active />} />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {contentTypeData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-gray-600">
                      {item.name}: {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                Why this recommendation?
              </h3>
              <p className="text-gray-700 mb-4">
                Video content leads at 25% because your target audience (Gen Z
                and millennials) engages 3x more with video formats. Carousel
                ads follow at 18% due to their proven 30% higher CTR for product
                showcases. Static images provide cost-effective brand awareness,
                while influencer posts leverage social proof for authenticity.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Ask Me More
              </button>
            </div>
          </div>
        </div> */}

        {/* Section 2: Channel Mix */}
        {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Channel Mix
              </h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={channelMixData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {channelMixData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {channelMixData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-gray-600">
                      {item.name}: {item.value}%
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Meta chosen for high reach and prior conversion efficiency at
                30%. Google Search provides intent-driven traffic at 25%.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                Why this recommendation?
              </h3>
              <p className="text-gray-700 mb-4">
                Meta platforms dominate at 30% due to their superior audience
                targeting and your historical 6.2x ROAS. Google Search captures
                high-intent users at 25%, while YouTube provides video-native
                environment for content engagement. Email maintains 10% for
                nurturing existing customers with personalized messaging.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Ask Me More
              </button>
            </div>
          </div>
        </div> */}

        {/* Section 3: Audience Segmentation */}
        {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Audience Segmentation
              </h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={audienceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="segment"
                      angle={-45}
                      textAnchor="end"
                      height={100}
                    />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#009FDB" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm font-medium">
                    Primary: Urban Millennials (25-34)
                  </span>
                  <span className="text-sm text-blue-600">35%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="text-sm font-medium">
                    Secondary: Suburban Professionals (35-44)
                  </span>
                  <span className="text-sm text-blue-600">28%</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                Why this recommendation?
              </h3>
              <p className="text-gray-700 mb-4">
                Urban millennials (25-34) are prioritized at 35% due to their
                8.4x higher ROAS in sustainability campaigns and 65%
                mobile-first behavior. Suburban professionals follow at 28% for
                their higher lifetime value and brand loyalty. Eco-conscious
                consumers span demographics but show 40% higher conversion rates
                for sustainable products.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Ask Me More
              </button>
            </div>
          </div>
        </div> */}

        {/* Section 4: Aggregate KPIs */}
        {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Aggregate KPIs
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {kpiData.map((kpi, index) => {
                  const IconComponent = kpi.icon;
                  return (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {kpi.confidence}
                        </span>
                      </div>
                      <h3 className="text-sm font-medium text-gray-600">
                        {kpi.metric}
                      </h3>
                      <p className="text-2xl font-bold text-gray-900">
                        {kpi.value}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Key Insights
                </h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• 5.4x ROAS exceeds industry average by 80%</li>
                  <li>• $24.50 CPA is 35% below target threshold</li>
                  <li>• 3.4% CTR indicates strong creative resonance</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                Why this recommendation?
              </h3>
              <p className="text-gray-700 mb-4">
                The projected 5.4x ROAS is based on historical performance data
                and current market conditions. The $24.50 CPA reflects optimized
                targeting and creative testing. With 95% confidence, we expect
                12 campaigns to generate $847K revenue from $156K investment.
                CTR of 3.4% indicates strong audience-creative alignment.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Ask Me More
              </button>
            </div>
          </div>
        </div> */}

        {/* Section 5: 3-Month Calendar */}
        {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3-Month Calendar
              </h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={calendarData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="video"
                      stackId="a"
                      fill="#002C5F"
                      name="Video"
                    />
                    <Bar
                      dataKey="carousel"
                      stackId="a"
                      fill="#009FDB"
                      name="Carousel"
                    />
                    <Bar
                      dataKey="static"
                      stackId="a"
                      fill="#4A90E2"
                      name="Static"
                    />
                    <Bar
                      dataKey="influencer"
                      stackId="a"
                      fill="#7BB3F0"
                      name="Influencer"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Month 1</h4>
                  <p className="text-sm text-gray-600">Launch & Awareness</p>
                  <p className="text-sm text-blue-600">21 campaigns</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Month 2</h4>
                  <p className="text-sm text-gray-600">Scale & Optimize</p>
                  <p className="text-sm text-blue-600">26 campaigns</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Month 3</h4>
                  <p className="text-sm text-gray-600">Retention & Growth</p>
                  <p className="text-sm text-blue-600">23 campaigns</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                Why this recommendation?
              </h3>
              <p className="text-gray-700 mb-4">
                The campaign timeline follows a strategic arc: Month 1 focuses
                on awareness with video-heavy content, Month 2 scales successful
                formats while optimizing underperformers, and Month 3 shifts
                toward retention with personalized static content and influencer
                partnerships. This progression maximizes both reach and
                conversion efficiency.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Ask Me More
              </button>
            </div>
          </div>
        </div> */}

        {/* Action Buttons */}
        {/* <div className="flex justify-center space-x-4 mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Approve Campaign Plan
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            Request Modifications
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Export Dashboard
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ClarityAIDashboard;
