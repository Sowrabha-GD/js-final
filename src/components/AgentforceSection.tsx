import { Link } from "react-router-dom";
import { 
  Bot, Sparkles, Brain, Zap, Globe, Shield, 
  ArrowRight, MessageSquare, Users, Workflow
} from "lucide-react";

const AgentforceSection = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-950 to-blue-950 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-wide section-padding relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20">
            <Bot className="w-4 h-4" />
            <span>The Future is Agentic</span>
            <Sparkles className="w-4 h-4" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Agentforce & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">Agentic AI</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-8">
            I help forward-thinking companies leverage autonomous AI agents to transform customer experiences and operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/AgentforcePage"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-purple-500/25 inline-flex items-center gap-2 group"
            >
              Explore Agentforce solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-xl transition-all border border-white/20 inline-flex items-center gap-2"
            >
              Discuss your AI strategy
            </Link>
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Bot,
              title: "Autonomous Agents",
              description: "AI agents that reason, act, and learn across your customer journeys."
            },
            {
              icon: MessageSquare,
              title: "Conversational AI",
              description: "Natural, context-aware interactions across any channel."
            },
            {
              icon: Workflow,
              title: "Orchestration",
              description: "Coordinate multiple agents for complex, multi-step processes."
            },
            {
              icon: Shield,
              title: "Trust Layer",
              description: "Enterprise-grade security, compliance, and guardrails."
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <Icon className="w-8 h-8 text-blue-300 mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-blue-100">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Use Cases */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Transformative Use Cases</h3>
            
            {[
              {
                title: "Intelligent Customer Service",
                description: "24/7 AI agents that resolve complex issues, hand off seamlessly to humans, and learn from every interaction.",
                impact: "70% reduction in response time"
              },
              {
                title: "Sales Development Agents",
                description: "Autonomous prospecting, qualification, and meeting booking that never sleeps.",
                impact: "3x more qualified leads"
              },
              {
                title: "Digital Onboarding",
                description: "Personalized guidance through complex onboarding flows with instant answers and proactive assistance.",
                impact: "50% faster time-to-value"
              }
            ].map((useCase, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-bold mb-2">{useCase.title}</h4>
                <p className="text-sm text-blue-100 mb-3">{useCase.description}</p>
                <div className="inline-flex items-center gap-2 text-sm text-emerald-300">
                  <Zap className="w-4 h-4" />
                  {useCase.impact}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Architecture Preview */}
          <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Agentic Architecture</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Brain className="w-4 h-4 text-blue-300" />
                </div>
                <div>
                  <h4 className="font-semibold">Orchestration Layer</h4>
                  <p className="text-sm text-blue-100">Coordinates multiple agents, manages context, and ensures seamless handoffs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-4 h-4 text-purple-300" />
                </div>
                <div>
                  <h4 className="font-semibold">Integration Mesh</h4>
                  <p className="text-sm text-blue-100">Connect to any system - Salesforce, ERP, custom apps, and external APIs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-pink-300" />
                </div>
                <div>
                  <h4 className="font-semibold">Trust & Safety</h4>
                  <p className="text-sm text-blue-100">Guardrails, audit trails, and human-in-the-loop for critical decisions</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <Link 
                to="/AgentforceGuidePage"
                className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors group"
              >
                <span>Download Agentforce architecture guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl border border-white/10">
          <h3 className="text-3xl font-bold mb-4">Ready to explore Agentic AI?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how autonomous agents can transform your customer experience and operations.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-medium rounded-xl transition-colors group"
          >
            Schedule a strategy call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default AgentforceSection;