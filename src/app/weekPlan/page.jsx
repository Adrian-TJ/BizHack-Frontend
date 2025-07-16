"use client";

import React, { useState } from 'react';
import { Brain, Bell, Settings, User } from 'lucide-react';
import { X, MessageCircle, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Calendar, Clock, Users, DollarSign, TrendingUp, Eye, MousePointer, Target } from 'lucide-react';

import { useRouter } from "next/navigation";


const WeeklyPlanView = () => {
    const [selectedWeek, setSelectedWeek] = useState(0); // 0 = current week
    const [isWeekDropdownOpen, setIsWeekDropdownOpen] = useState(false);
    const [askMeWhyOpen, setAskMeWhyOpen] = useState(false);
    const [userQuestion, setUserQuestion] = useState("");

    const handleSubmitQuestion = () => {
        // In a real app, this would send the question to an AI service
        console.log("User question:", userQuestion);
        handleCloseModal();
    };

    const handleAskMeWhy = () => {
        setAskMeWhyOpen(true);
    };

    const handleCloseModal = () => {
        setAskMeWhyOpen(false);
        setUserQuestion("");
    };

    const router = useRouter();

    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const fullWeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Generate weeks data
    const generateWeeksData = () => {
        const weeks = [];
        const baseDate = new Date(2025, 6, 15); // July 15, 2025

        for (let i = -2; i <= 4; i++) {
            const weekStart = new Date(baseDate);
            weekStart.setDate(baseDate.getDate() + (i * 7));
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekStart.getDate() + 6);

            weeks.push({
                id: i,
                label: `Week of ${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}–${weekEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`,
                startDate: weekStart,
                endDate: weekEnd
            });
        }
        return weeks;
    };

    const weeks = generateWeeksData();
    const currentWeek = weeks.find(w => w.id === selectedWeek);

    const navigateWeek = (direction) => {
        if (direction === 'prev' && selectedWeek > -2) {
            setSelectedWeek(selectedWeek - 1);
        } else if (direction === 'next' && selectedWeek < 4) {
            setSelectedWeek(selectedWeek + 1);
        }
    };

    const selectWeek = (weekId) => {
        setSelectedWeek(weekId);
        setIsWeekDropdownOpen(false);
    };

    const campaigns = [
        {
            id: 1,
            name: "Gen Z Sneaker Launch",
            channel: "Meta",
            scheduledDate: "July 16, 6:00 PM",
            duration: "5 days",
            targetSegment: "Gen Z Urban Males",
            budget: "$2,000",
            kpis: { ctr: "3.2%", roas: "4.5x", cpa: "$12" },
            dayIndex: 1,
            weekId: 0, // Current week
            whyReasoning: "Selected Meta for high Gen Z engagement rates during evening hours. This demographic shows 40% higher interaction with sneaker content on weekdays. Aligns with your goal of increasing brand awareness among younger urban consumers.",
            confidence: "High confidence - 85%"
        },
        {
            id: 2,
            name: "Email Newsletter Campaign",
            channel: "Email",
            scheduledDate: "July 15, 9:00 AM",
            duration: "1 day",
            targetSegment: "Existing Customers",
            budget: "$500",
            kpis: { ctr: "12%", roas: "6.2x", cpa: "$8" },
            dayIndex: 0,
            weekId: 0, // Current week
            whyReasoning: "Email performs best on Monday mornings for existing customers. This timing maximizes open rates and drives repeat purchases. Supports your customer retention goals with personalized content.",
            confidence: "Very high confidence - 92%"
        },
        {
            id: 3,
            name: "YouTube Product Demo",
            channel: "YouTube",
            scheduledDate: "July 18, 2:00 PM",
            duration: "7 days",
            targetSegment: "Tech Enthusiasts 25-40",
            budget: "$3,500",
            kpis: { ctr: "2.8%", roas: "3.8x", cpa: "$15" },
            dayIndex: 3,
            weekId: 0, // Current week
            whyReasoning: "YouTube's algorithm favors afternoon uploads for tech content. This segment actively searches for product demos midweek. Aligns with your goal of driving product education and consideration.",
            confidence: "High confidence - 78%"
        },
        {
            id: 4,
            name: "Weekend Flash Sale",
            channel: "Meta",
            scheduledDate: "July 19, 10:00 AM",
            duration: "2 days",
            targetSegment: "Price-Conscious Shoppers",
            budget: "$1,200",
            kpis: { ctr: "4.1%", roas: "5.2x", cpa: "$10" },
            dayIndex: 4,
            weekId: 0, // Current week
            whyReasoning: "Weekend flash sales on Meta generate urgency and drive immediate conversions. This segment responds well to limited-time offers. Supports your quarterly sales targets with proven high-conversion tactics.",
            confidence: "High confidence - 88%"
        },
        // Next week campaigns
        {
            id: 5,
            name: "Back-to-School Campaign",
            channel: "Google",
            scheduledDate: "July 22, 8:00 AM",
            duration: "10 days",
            targetSegment: "Parents 35-50",
            budget: "$4,000",
            kpis: { ctr: "2.5%", roas: "3.2x", cpa: "$18" },
            dayIndex: 0,
            weekId: 1, // Next week
            whyReasoning: "Google Search captures high-intent parent searches for school supplies. Early morning timing aligns with parent planning behavior. Supports seasonal sales objectives.",
            confidence: "High confidence - 82%"
        },
        {
            id: 6,
            name: "Influencer Collaboration",
            channel: "YouTube",
            scheduledDate: "July 24, 3:00 PM",
            duration: "3 days",
            targetSegment: "Millennials 25-35",
            budget: "$2,500",
            kpis: { ctr: "4.2%", roas: "4.8x", cpa: "$11" },
            dayIndex: 2,
            weekId: 1, // Next week
            whyReasoning: "Influencer content performs best mid-week when engagement peaks. This demographic trusts authentic recommendations. Aligns with brand credibility goals.",
            confidence: "Very high confidence - 91%"
        }
    ];

    // Filter campaigns for selected week
    const weekCampaigns = campaigns.filter(campaign => campaign.weekId === selectedWeek);

    const getChannelColor = (channel) => {
        const colors = {
            Meta: "bg-blue-100 text-blue-800 border-blue-200",
            YouTube: "bg-red-100 text-red-800 border-red-200",
            Email: "bg-green-100 text-green-800 border-green-200",
            Google: "bg-yellow-100 text-yellow-800 border-yellow-200"
        };
        return colors[channel] || "bg-gray-100 text-gray-800 border-gray-200";
    };

    const timelineItems = weekDays.map((day, index) => {
        const campaignsForDay = weekCampaigns.filter(c => c.dayIndex === index);
        return { day, campaigns: campaignsForDay };
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
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
                                <span className="ml-4 text-gray-600">/ Weekly Generator</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Bell className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
                                <Settings className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
                                <User className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        {/* Navigation - Matching landing page style */}
                        {/* Week Selector */}
                        <div className="flex items-center space-x-4">
                            {/* Navigation Arrows */}
                            <button
                                onClick={() => navigateWeek('prev')}
                                disabled={selectedWeek <= -2}
                                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 text-gray-600" />
                            </button>

                            {/* Week Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setIsWeekDropdownOpen(!isWeekDropdownOpen)}
                                    className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors min-w-48"
                                >
                                    <Calendar className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm font-medium text-gray-700">
                                        {currentWeek?.label || 'Select Week'}
                                    </span>
                                    <ChevronDown className="w-4 h-4 text-gray-500" />
                                </button>

                                {isWeekDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                        <div className="py-1 max-h-64 overflow-y-auto">
                                            {weeks.map((week) => (
                                                <button
                                                    key={week.id}
                                                    onClick={() => selectWeek(week.id)}
                                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${selectedWeek === week.id
                                                        ? 'bg-blue-50 text-blue-700 font-medium'
                                                        : 'text-gray-700'
                                                        }`}
                                                >
                                                    {week.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => navigateWeek('next')}
                                disabled={selectedWeek >= 4}
                                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Timeline Grid */}
                <div className="bg-white rounded-lg shadow-sm border mb-8 overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Campaign Timeline</h2>
                        <div className="overflow-x-auto">
                            <div className="flex min-w-full">
                                {timelineItems.map((item, index) => (
                                    <div key={index} className="flex-1 min-w-32 px-3 py-4 border-r last:border-r-0">
                                        <div className="text-center">
                                            <div className="text-sm font-medium text-gray-900 mb-2">{item.day}</div>
                                            <div className="text-xs text-gray-500 mb-3">{15 + index}/07</div>
                                            <div className="space-y-2">
                                                {item.campaigns.map((campaign) => (
                                                    <div
                                                        key={campaign.id}
                                                        className={`text-xs px-2 py-1 rounded-full border ${getChannelColor(campaign.channel)}`}
                                                    >
                                                        {campaign.name.slice(0, 12)}...
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Campaign Cards */}
                <div className="space-y-6">
                    {weekCampaigns.length > 0 ? (
                        weekCampaigns.map((campaign) => (
                            <div key={campaign.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200">
                                <div className="p-6">
                                    {/* Campaign Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-xl font-bold text-gray-900">{campaign.name}</h3>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getChannelColor(campaign.channel)}`}>
                                            {campaign.channel}
                                        </span>
                                    </div>

                                    {/* Campaign Details Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="w-4 h-4 text-blue-600" />
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">Scheduled Date & Time</p>
                                                <p className="text-sm text-gray-600">{campaign.scheduledDate}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <Clock className="w-4 h-4 text-blue-600" />
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">Duration</p>
                                                <p className="text-sm text-gray-600">{campaign.duration}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <Users className="w-4 h-4 text-blue-600" />
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">Target Segment</p>
                                                <p className="text-sm text-gray-600">{campaign.targetSegment}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <DollarSign className="w-4 h-4 text-blue-600" />
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">Allocated Budget</p>
                                                <p className="text-sm text-gray-600">{campaign.budget}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expected KPIs */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-medium text-gray-900 mb-3">Expected KPIs</h4>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                                                <MousePointer className="w-4 h-4 text-blue-600" />
                                                <div>
                                                    <p className="text-xs font-medium text-gray-600">CTR</p>
                                                    <p className="text-sm font-semibold text-gray-900">{campaign.kpis.ctr}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                                                <TrendingUp className="w-4 h-4 text-blue-600" />
                                                <div>
                                                    <p className="text-xs font-medium text-gray-600">ROAS</p>
                                                    <p className="text-sm font-semibold text-gray-900">{campaign.kpis.roas}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                                                <Target className="w-4 h-4 text-blue-600" />
                                                <div>
                                                    <p className="text-xs font-medium text-gray-600">CPA</p>
                                                    <p className="text-sm font-semibold text-gray-900">{campaign.kpis.cpa}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Why This Campaign Section */}
                                    <div className="border-t pt-4">
                                        <button
                                            onClick={() => toggleCard(campaign.id)}
                                            className="flex items-center justify-between w-full text-left"
                                        >
                                            <h4 className="text-sm font-medium text-gray-900">Why This Campaign?</h4>
                                        </button>

                                            <div className="mt-3 space-y-2">
                                                <p className="text-sm text-gray-600">{campaign.whyReasoning}</p>
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                    <span className="text-sm font-medium text-green-700">{campaign.confidence}</span>
                                                </div>
                                            </div>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="mt-6 pt-4 border-t" onClick={() => handleAskMeWhy()}>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                            Know More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
                            <div className="flex flex-col items-center space-y-4">
                                <Calendar className="w-12 h-12 text-gray-400" />
                                <h3 className="text-lg font-medium text-gray-900">No campaigns scheduled</h3>
                                <p className="text-gray-600">There are no campaigns planned for this week.</p>
                            </div>
                        </div>
                    )}
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
                                        <X className="w-6 h-6 cursor-pointer" />
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
                                        onClick={() => ([])}
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
        </div>
    );
};

export default WeeklyPlanView;