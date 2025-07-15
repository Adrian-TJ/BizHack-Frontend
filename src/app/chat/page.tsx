"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Play,
  Clock,
  TrendingUp,
  DollarSign,
  BarChart3,
  Info,
  MessageCircle,
  X,
} from "lucide-react";

const CampaignDeepDive = () => {
  const [askMeWhyOpen, setAskMeWhyOpen] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [expandedModules, setExpandedModules] = useState<
    Record<string, boolean>
  >({});

  const campaignData = {
    name: "Summer Tech Sale - Video Campaign",
    goalAlignment: "Drive conversions for Q3 product launch",
    scheduledTime: "July 18–24, 2025",
    duration: "7 days",
    channel: "YouTube",
    targetSegment: "Tech professionals, 25–34, urban markets",
    creativeType: "Video (30-second promotional)",
  };

  const explanationModules = [
    {
      id: "channel",
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Why this channel",
      content:
        "YouTube shows 2.3x higher ROAS for your tech audience compared to other video platforms. Your previous campaigns achieved 4.2% CTR here vs 1.8% on Facebook. The professional demographic aligns perfectly with YouTube's prime-time viewing patterns.",
      metrics: "Historical ROAS: 4.2x | Audience Match: 89%",
    },
    {
      id: "content",
      icon: <Play className="w-5 h-5" />,
      title: "Why this content type",
      content:
        "Video content generates 3x more engagement than static images for your brand. A/B tests show 30-second videos have 25% higher completion rates than 60-second versions. This format balances message depth with attention span optimization.",
      metrics: "Completion Rate: 67% | Engagement: +180%",
    },
    {
      id: "timing",
      icon: <Clock className="w-5 h-5" />,
      title: "Why this timing",
      content:
        "Peak engagement for your audience occurs 6-8 PM weekdays and 2-4 PM weekends. July timing captures pre-back-to-school shopping behavior and avoids vacation-heavy August. This 7-day window maximizes frequency without oversaturation.",
      metrics: "Peak Hours: 6-8 PM | Optimal Duration: 5-7 days",
    },
    {
      id: "budget",
      icon: <DollarSign className="w-5 h-5" />,
      title: "Why this budget",
      content:
        "80% allocation to video ads and 20% to remarketing ensures optimal reach-to-conversion balance. This distribution has historically delivered 15% better ROI than equal splits. Cost per acquisition is projected at $23 vs industry average of $35.",
      metrics: "Projected CPA: $23 | Expected ROI: 3.8x",
    },
    {
      id: "kpis",
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Expected KPIs",
      content:
        "Based on historical performance and market conditions, we project strong metrics across all key indicators. Confidence intervals account for seasonal variations and competitive landscape changes.",
      metrics: "ROAS: 4.2x (±0.5) | CTR: 3.8% (±0.4) | CPA: $23 (±3)",
    },
    {
      id: "counterfactual",
      icon: <Info className="w-5 h-5" />,
      title: "Counterfactual insight",
      content:
        "We didn't recommend TikTok due to 30% higher CPA with your audience demographic. Facebook was excluded due to recent iOS changes impacting tracking accuracy by 23%. LinkedIn showed promise but required 2x budget for similar reach.",
      metrics:
        "TikTok CPA: +30% | Facebook Accuracy: -23% | LinkedIn Cost: +100%",
    },
  ];

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  const handleAskMeWhy = () => {
    setAskMeWhyOpen(true);
  };

  const handleCloseModal = () => {
    setAskMeWhyOpen(false);
    setUserQuestion("");
  };

  const handleSubmitQuestion = () => {
    // In a real app, this would send the question to an AI service
    console.log("User question:", userQuestion);
    handleCloseModal();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#002C5F] mb-2">
            Campaign Deep Dive
          </h1>
          <p className="text-gray-600">
            Comprehensive analysis and reasoning behind your marketing campaign
            strategy
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Campaign Preview & Details */}
          <div className="space-y-6">
            {/* Campaign Asset Preview */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-[#002C5F] mb-4">
                Campaign Asset Preview
              </h2>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="text-center">
                  <Play className="w-16 h-16 text-[#009FDB] mb-2 mx-auto" />
                  <p className="text-gray-600 font-medium">Video Preview</p>
                  <p className="text-sm text-gray-500">
                    30-second promotional video
                  </p>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-[#009FDB] text-white px-2 py-1 rounded-full text-sm">
                    YouTube
                  </span>
                </div>
              </div>
              <button className="w-full flex items-center justify-center space-x-2 border-2 border-[#009FDB] text-[#009FDB] py-2 px-4 rounded-lg hover:bg-[#009FDB] hover:text-white transition-colors">
                <Play className="w-4 h-4" />
                <span>Preview Campaign Asset</span>
              </button>
            </div>

            {/* Campaign Details */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#002C5F] text-white p-4">
                <h2 className="text-xl font-semibold">Campaign Details</h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Campaign Name</p>
                  <p className="font-semibold text-[#002C5F]">
                    {campaignData.name}
                  </p>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <p className="text-sm text-gray-600 mb-1">Goal Alignment</p>
                  <p className="text-gray-800">{campaignData.goalAlignment}</p>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Scheduled Time & Duration
                  </p>
                  <p className="text-gray-800">{campaignData.scheduledTime}</p>
                  <span className="inline-block bg-[#F5F5F5] text-gray-700 px-2 py-1 rounded text-sm mt-1">
                    {campaignData.duration}
                  </span>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <p className="text-sm text-gray-600 mb-1">Channel</p>
                  <span className="inline-block bg-[#009FDB] text-white px-3 py-1 rounded-full text-sm">
                    {campaignData.channel}
                  </span>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <p className="text-sm text-gray-600 mb-1">Target Segment</p>
                  <p className="text-gray-800">{campaignData.targetSegment}</p>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <p className="text-sm text-gray-600 mb-1">Creative Type</p>
                  <p className="text-gray-800">{campaignData.creativeType}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Explanation Modules */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#002C5F] mb-4">
              AI Reasoning & Insights
            </h2>

            {explanationModules.map((module) => (
              <div
                key={module.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full flex items-center justify-between p-4 bg-[#F5F5F5] hover:bg-gray-200 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-[#009FDB]">{module.icon}</div>
                    <h3 className="text-lg font-semibold text-[#002C5F]">
                      {module.title}
                    </h3>
                  </div>
                  {expandedModules[module.id] ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {expandedModules[module.id] && (
                  <div className="p-4 border-t border-gray-200">
                    <p className="text-gray-700 mb-3">{module.content}</p>
                    <div className="bg-[#F5F5F5] p-3 rounded">
                      <p className="text-sm text-gray-600 font-medium">
                        Key Metrics: {module.metrics}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Ask Me Why Button */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-[#002C5F] mb-3">
                Need More Clarity?
              </h3>
              <p className="text-gray-600 mb-4">
                Ask our AI assistant any question about this campaign strategy
              </p>
              <button
                onClick={handleAskMeWhy}
                className="w-full bg-[#009FDB] hover:bg-[#007bb5] text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Ask Me Why</span>
              </button>
            </div>
          </div>
        </div>

        {/* Ask Me Why Modal */}
        {askMeWhyOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-[#002C5F] text-white p-6 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-6 h-6" />
                  <h2 className="text-xl font-semibold">Ask ClarityAI</h2>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Ask any question about this campaign strategy and I&#39;ll
                  provide a clear, data-driven explanation.
                </p>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009FDB] focus:border-transparent"
                  rows={4}
                  placeholder="e.g., Why didn't you choose Facebook for this campaign?"
                  value={userQuestion}
                  onChange={(e) => setUserQuestion(e.target.value)}
                />
                <div className="mt-4 p-3 bg-[#F5F5F5] rounded">
                  <p className="text-sm text-gray-600 font-medium mb-1">
                    Example questions:
                  </p>
                  <ul className="text-sm text-gray-600">
                    <li>• Why is this campaign only 7 days long?</li>
                    <li>
                      • What would happen if we increased the budget by 50%?
                    </li>
                    <li>
                      • Why didn&#39;t you recommend Instagram for this
                      campaign?
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-gray-50 flex justify-end space-x-3">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitQuestion}
                  disabled={!userQuestion.trim()}
                  className="px-6 py-2 bg-[#009FDB] hover:bg-[#007bb5] text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  Get Answer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignDeepDive;
