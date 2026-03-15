import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  Code, FileText, Layers, GitBranch,
  CheckCircle, ArrowRight, Award, AlertTriangle,
  Cpu, Box, Repeat, Shield,
  Zap, RefreshCw, Filter, Grid
} from "lucide-react";

const ApexDesignPatternsPage = () => {
  const patterns = [
    {
      name: "Domain Layer Pattern",
      description: "Encapsulate business logic in reusable domain classes, keeping triggers thin.",
      icon: Layers,
      color: "from-blue-500 to-cyan-500",
      benefits: [
        "Business logic in one place",
        "Triggers under 10 lines",
        "Easily testable",
        "Reusable across contexts"
      ],
      code: `public class AccountsDomain {
    List<Account> accounts;
    
    public AccountsDomain(List<Account> records) {
        this.accounts = records;
    }
    
    public void applyDiscounts() {
        for(Account acc : accounts) {
            if(acc.AnnualRevenue > 1000000) {
                acc.Discount_Percent__c = 15;
            }
        }
    }
}`
    },
    {
      name: "Selector Layer Pattern",
      description: "Centralize SOQL queries with consistent filtering and performance optimization.",
      icon: Filter,
      color: "from-purple-500 to-pink-500",
      benefits: [
        "No SOQL in business logic",
        "Consistent query patterns",
        "Easy to add caching",
        "Mockable for tests"
      ],
      code: `public class AccountSelector {
    public List<Account> getActiveAccounts() {
        return [SELECT Id, Name, AnnualRevenue 
                FROM Account 
                WHERE IsActive__c = true];
    }
    
    public List<Account> getByIds(Set<Id> ids) {
        return [SELECT Id, Name, AnnualRevenue 
                FROM Account 
                WHERE Id IN :ids];
    }
}`
    },
    {
      name: "Service Layer Pattern",
      description: "Orchestrate complex operations by composing domain objects and selectors.",
      icon: GitBranch,
      color: "from-emerald-500 to-teal-500",
      benefits: [
        "Clear entry points for operations",
        "Transaction management",
        "Orchestration logic isolated",
        "Reusable across APIs"
      ],
      code: `public class OrderService {
    public void processBulkDiscounts(Set<Id> accountIds) {
        AccountSelector selector = new AccountSelector();
        List<Account> accounts = selector.getByIds(accountIds);
        
        AccountsDomain domain = new AccountsDomain(accounts);
        domain.applyDiscounts();
        
        update accounts;
    }
}`
    },
    {
      name: "Trigger Handler Pattern",
      description: "Framework for organized, maintainable trigger logic.",
      icon: Repeat,
      color: "from-amber-500 to-orange-500",
      benefits: [
        "One trigger per object",
        "Clear execution order",
        "Recursion prevention",
        "Error handling framework"
      ],
      code: `public class AccountTriggerHandler {
    public void onBeforeInsert(List<Account> newRecords) {
        AccountsDomain domain = new AccountsDomain(newRecords);
        domain.applyDefaults();
        domain.validate();
    }
    
    public void onAfterUpdate(List<Account> newRecords) {
        OrderService.processBulkDiscounts(
            new Map<Id,Account>(newRecords).keySet()
        );
    }
}`
    }
  ];

  const antiPatterns = [
    {
      name: "God Class",
      description: "A single class doing everything - thousands of lines, impossible to test.",
      impact: "High maintenance cost, brittle code"
    },
    {
      name: "SOQL in Loops",
      description: "Query inside a loop causing governor limit failures.",
      impact: "Batches fail, users frustrated"
    },
    {
      name: "Hardcoded IDs",
      description: "Record IDs embedded in code that break in sandboxes.",
      impact: "Deployment failures, environment drift"
    },
    {
      name: "No Error Handling",
      description: "Uncaught exceptions cause partial failures and data corruption.",
      impact: "Data inconsistency, debugging nightmares"
    }
  ];

  const caseStudy = {
    client: "Fast-Growing SaaS Company",
    challenge: "Spaghetti code with 2,000-line triggers and no test coverage",
    approach: "Refactored to Domain/Selector/Service pattern + comprehensive test suite",
    results: [
      "Test coverage from 30% to 92%",
      "Deployment time reduced by 70%",
      "New features delivered 2x faster",
      "Zero production bugs in 6 months"
    ]
  };

  return (
    <Layout>
      {/* Hero Section - Code Theme */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-800 text-white overflow-hidden">
        {/* Code Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="code" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <text x="5" y="20" fontSize="12" fill="white">{'<>'}</text>
                <text x="25" y="35" fontSize="12" fill="white">{'{}'}</text>
                <text x="5" y="35" fontSize="12" fill="white">{'()'}</text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#code)" />
          </svg>
        </div>

        <div className="container-wide py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Code className="w-4 h-4" />
                Apex Design Patterns
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Writing <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-200">Maintainable, Scalable Apex</span>
              </h1>
              
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl">
                I transform spaghetti code into clean, testable, maintainable architectures. Using proven design patterns, I help development teams ship faster with fewer bugs.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-900 hover:bg-emerald-50 rounded-xl font-medium transition-all"
                >
                  Review your codebase
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/ApexDesignPatternsCaseStudyPage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl font-medium transition-all border border-white/20"
                >
                  View development case studies
                </Link>
              </div>

              <div className="flex gap-8 mt-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold">30+</div>
                  <div className="text-sm text-emerald-200">Code Reviews</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">90%+</div>
                  <div className="text-sm text-emerald-200">Test Coverage</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Zero</div>
                  <div className="text-sm text-emerald-200">Gov Limit Issues</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Patterns */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-wider text-emerald-600 uppercase bg-emerald-50 px-4 py-2 rounded-full">
              My Arsenal
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-6 mb-4">
              Essential <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Apex Patterns</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Patterns I use on every enterprise project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {patterns.map((pattern, index) => {
              const Icon = pattern.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${pattern.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{pattern.name}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{pattern.description}</p>
                      
                      <ul className="space-y-2">
                        {pattern.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="lg:w-2/3">
                      <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                        <pre className="text-sm text-green-400 font-mono">
                          <code>{pattern.code}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Anti-Patterns */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Anti-Patterns</span> I Eradicate
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                I've seen every mistake. Here's what I fix.
              </p>

              <div className="space-y-4">
                {antiPatterns.map((pattern, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{pattern.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">{pattern.description}</p>
                      <p className="text-xs text-red-600">Impact: {pattern.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 border border-emerald-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-World Impact</h3>
              
              <div className="mb-6 p-4 bg-white rounded-lg border border-emerald-100">
                <p className="text-sm text-gray-600 mb-2 font-semibold">CASE STUDY</p>
                <h4 className="font-bold text-gray-900 mb-2">{caseStudy.client}</h4>
                <p className="text-sm text-gray-600 mb-3 italic">"{caseStudy.challenge}"</p>
                <p className="text-sm text-gray-700 mb-3"><span className="font-semibold">Approach:</span> {caseStudy.approach}</p>
                <ul className="space-y-1">
                  {caseStudy.results.map((result, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Code Reduction", value: "40-60%", icon: FileText },
                  { label: "Test Coverage", value: "90%+", icon: Shield },
                  { label: "Dev Velocity", value: "2x", icon: Zap },
                  { label: "Production Bugs", value: "↓80%", icon: AlertTriangle }
                ].map((metric, i) => {
                  const Icon = metric.icon;
                  return (
                    <div key={i} className="bg-white rounded-lg p-3 text-center">
                      <Icon className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                      <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Code Quality Metrics */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Good Code</span> Looks Like
            </h2>
            <p className="text-gray-600 text-lg">
              Metrics I use to measure code quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { metric: "Cyclomatic Complexity", target: "< 10", icon: Cpu },
              { metric: "Test Coverage", target: "> 90%", icon: Shield },
              { metric: "Method Length", target: "< 20 lines", icon: FileText },
              { metric: "Comments Ratio", target: "15-20%", icon: Code }
            ].map((item, index) => {
              const Icon = item.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center border border-gray-200"
                >
                  <Icon className="w-6 h-6 text-emerald-600 mx-auto mb-3" />
                  <h3 className="text-sm font-medium text-gray-500 mb-1">{item.metric}</h3>
                  <p className="text-2xl font-bold text-gray-900">{item.target}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testing Strategy */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Testing <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">That Actually Works</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                I don't just write tests for coverage. I write tests that catch bugs and enable refactoring.
              </p>

              <div className="space-y-4">
                {[
                  {
                    type: "Unit Tests",
                    description: "Test individual classes in isolation with mocks",
                    coverage: "70-80%"
                  },
                  {
                    type: "Integration Tests",
                    description: "Test interactions between classes and with the database",
                    coverage: "15-20%"
                  },
                  {
                    type: "Behavior Tests",
                    description: "Test business scenarios end-to-end",
                    coverage: "5-10%"
                  }
                ].map((test, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                    <div>
                      <h3 className="font-bold text-gray-900">{test.type}</h3>
                      <p className="text-sm text-gray-600">{test.description}</p>
                    </div>
                    <span className="text-lg font-bold text-emerald-600">{test.coverage}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 border border-emerald-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">My Testing Principles</h3>
              
              <ul className="space-y-3">
                {[
                  "Tests should be independent and repeatable",
                  "Mock external dependencies, not internal logic",
                  "Test behavior, not implementation",
                  "Coverage is a metric, not a goal",
                  "Tests are documentation",
                  "Red-Green-Refactor every time"
                ].map((principle, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{principle}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Apex Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">FAQ</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Questions from development teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "When should I use Domain vs Service layer?",
                a: "Domain layer handles business logic for a single object type. Service layer orchestrates multiple objects or external systems. I use both together."
              },
              {
                q: "How many lines should a trigger have?",
                a: "Ideal: 5-10 lines that just call a handler. If your trigger is longer, you're doing it wrong."
              },
              {
                q: "How do I handle governor limits with patterns?",
                a: "Patterns help with limits - selectors centralize query optimization, services manage bulkification, domains handle collections efficiently."
              },
              {
                q: "What about future methods and queueables?",
                a: "I encapsulate async logic in service methods, making them easy to call synchronously or asynchronously as needed."
              },
              {
                q: "How do I migrate legacy code to patterns?",
                a: "Strangler pattern - gradually replace pieces while maintaining functionality. I've done this for million-line codebases."
              },
              {
                q: "Do these patterns work for Lightning Components?",
                a: "Yes - the same principles apply. I design Apex to serve both triggers and APIs with consistent business logic."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-900 to-cyan-900 text-white py-20">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to clean up your codebase?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Let's review your Apex and build a roadmap to maintainable, scalable code.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 hover:bg-emerald-50 font-medium rounded-full transition-all transform hover:scale-105"
              >
                Schedule a code review
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ApexDesignPatternsCaseStudyPage"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full font-medium transition-all border border-white/20"
              >
                View development case studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ApexDesignPatternsPage;