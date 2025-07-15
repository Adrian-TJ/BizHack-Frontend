"use client";

import React from "react";
import {
  Brain,
  Eye,
  Users,
  Target,
  Lightbulb,
  BarChart3,
  Calendar,
  Search,
  TrendingUp,
  Shield,
  Lock,
  FileText,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const ClarityAIHomepage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">ClarityAI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </div>
            <button
              onClick={() => router.push("/generation")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Agentic Marketing AI.
              <br />
              <span className="text-blue-300">Clear Plans. Smarter Teams.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transform your marketing strategy with AI that thinks, plans, and
              explains every decision. Get autonomous campaign strategies that
              your team can understand and execute.
            </p>
            <button
              onClick={() => router.push("/generation")}
              className="bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500 transition-colors shadow-lg"
            >
              Start Planning
            </button>
          </div>
        </div>
      </section>

      {/* What is ClarityAI Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What is ClarityAI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The first marketing AI that combines autonomous planning with
              complete transparency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Agentic AI
              </h3>
              <p className="text-gray-600">
                Our AI doesn&rsquo;t just analyze—it thinks, plans, and acts
                autonomously to create comprehensive marketing strategies that
                adapt to your goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Explainable
              </h3>
              <p className="text-gray-600">
                Every recommendation comes with clear reasoning. Understand
                exactly why the AI made each decision and how it connects to
                your business objectives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Designed for Marketers
              </h3>
              <p className="text-gray-600">
                Built specifically for marketing teams, with workflows and
                insights that align with how modern marketers actually work and
                think.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple process, powerful results
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
            <div className="flex-1 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Input Goal
              </h3>
              <p className="text-gray-600">
                Define your marketing objectives and constraints
              </p>
            </div>

            <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block" />

            <div className="flex-1 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI Plan
              </h3>
              <p className="text-gray-600">
                AI creates comprehensive strategy with reasoning
              </p>
            </div>

            <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block" />

            <div className="flex-1 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Dashboard
              </h3>
              <p className="text-gray-600">
                Visual overview of your complete strategy
              </p>
            </div>

            <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block" />

            <div className="flex-1 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Weekly Plan
              </h3>
              <p className="text-gray-600">
                Actionable tasks broken down by week
              </p>
            </div>

            <ArrowRight className="h-6 w-6 text-gray-400 hidden md:block" />

            <div className="flex-1 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Deep Dive
              </h3>
              <p className="text-gray-600">
                Detailed analysis and optimization insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why It Matters
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-600 mb-6">
                The Problem
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    Marketing teams spend 70% of their time on planning, not
                    execution
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    AI tools provide recommendations without explaining the
                    reasoning
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    Strategies often lack cohesion across channels and campaigns
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    Teams struggle to align on strategic priorities and
                    execution
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-600 mb-6">
                The Solution
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <p className="text-gray-700">
                    AI handles strategic planning so teams focus on creative
                    execution
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <p className="text-gray-700">
                    Every decision is explained with clear business reasoning
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <p className="text-gray-700">
                    Integrated strategies that work seamlessly across all
                    channels
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <p className="text-gray-700">
                    Shared understanding and alignment across the entire team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You Get
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for smarter marketing
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Autonomous Strategy Generation
                  </h3>
                  <p className="text-gray-600">
                    AI creates comprehensive marketing plans tailored to your
                    goals and constraints
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Explainable Decision Making
                  </h3>
                  <p className="text-gray-600">
                    Understand the &rsquo;why&rsquo; behind every recommendation
                    with transparent reasoning
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Integrated Campaign Management
                  </h3>
                  <p className="text-gray-600">
                    Seamlessly coordinate across all marketing channels and
                    touchpoints
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Weekly Execution Plans
                  </h3>
                  <p className="text-gray-600">
                    Detailed, actionable tasks broken down by week with clear
                    priorities
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Performance Analytics & Optimization
                  </h3>
                  <p className="text-gray-600">
                    Continuous monitoring and strategy refinement based on
                    real-time data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who It&rsquo;s For
            </h2>
            <p className="text-xl text-gray-600">
              Built for modern marketing teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                CMO
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Strategic leaders who need comprehensive oversight and alignment
                across all marketing initiatives.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Strategic planning automation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Cross-channel coordination</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Executive reporting</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Performance Marketer
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Data-driven marketers who need actionable insights and
                optimization recommendations.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Campaign optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Attribution analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>ROI forecasting</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Content Team
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Creative professionals who need strategic context and clear
                priorities for content creation.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Content strategy alignment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Editorial planning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Performance insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 mb-6">
              &rdquo;ClarityAI transformed how our team approaches marketing
              strategy. For the first time, we have AI that not only makes
              recommendations but explains exactly why each decision makes sense
              for our business. Our planning time has been cut in half while our
              campaign performance has improved significantly.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">SM</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Sarah Martinez</p>
                <p className="text-gray-600">VP of Marketing, TechFlow Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Trust & Ethics Section */}
      <section className="py-20 bg-white-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trust & Ethics
            </h2>
            <p className="text-xl text-gray-600">
              AI you can trust with your marketing strategy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Transparency
              </h3>
              <p className="text-gray-600">
                Every AI decision is explainable with clear reasoning. No black
                box algorithms—just transparent intelligence you can understand
                and trust.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Responsible AI
              </h3>
              <p className="text-gray-600">
                Built with ethical AI principles, ensuring fair, unbiased
                recommendations that respect your brand values and customer
                relationships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Privacy-First
              </h3>
              <p className="text-gray-600">
                Your data stays secure with enterprise-grade privacy protection.
                We never share your strategies or insights with competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join forward-thinking marketing teams who are already using AI to
            create clearer, smarter strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/generation")}
              className="bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500 transition-colors"
            >
              Start For Free
            </button>
            {/* <button className="border border-blue-300 text-blue-100 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
              Schedule Demo
            </button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">ClarityAI</span>
              </div>
              <p className="text-gray-400">
                Agentic marketing AI that creates explainable, autonomous
                campaign strategies for modern teams.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  Integrations
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  API
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  Press
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  Status
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  Privacy
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ClarityAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClarityAIHomepage;
