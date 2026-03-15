import { Link } from "react-router-dom";
import { 
  DollarSign, HeadphonesIcon, Users2, Megaphone, 
  Calculator, ArrowRight, CheckCircle, Zap 
} from "lucide-react";

const ProductExpertiseSection = () => {

  const products = [
    {
      category: "Sales Process",
      icon: DollarSign,
      items: [
        "Sales Cloud implementation",
        "Opportunity management",
        "Territory planning",
        "Forecasting",
        "Lead scoring & routing"
      ],
      color: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50",
      textColor: "text-blue-600",
      link: "/sales"
    },
    {
      category: "Service Process",
      icon: HeadphonesIcon,
      items: [
        "Service Cloud setup",
        "Omni-channel routing",
        "Case management",
        "Knowledge base",
        "Field service"
      ],
      color: "from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-50",
      textColor: "text-emerald-600",
      link: "/service"
    },
    {
      category: "Communities & Portals",
      icon: Users2,
      items: [
        "Customer community portals",
        "Partner relationship mgmt",
        "Self-service experiences",
        "Digital branding",
        "Mobile app experiences"
      ],
      color: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-50",
      textColor: "text-purple-600",
      link: "/experience"
    },
    {
      category: "Marketing Campaigns",
      icon: Megaphone,
      items: [
        "Marketing Cloud journeys",
        "Email personalization",
        "Campaign automation",
        "Analytics & attribution",
        "Social media integration"
      ],
      color: "from-orange-500 to-red-500",
      bgLight: "bg-orange-50",
      textColor: "text-orange-600",
      link: "/marketing"
    },
    {
      category: "Quote to Cash (CPQ)",
      icon: Calculator,
      items: [
        "CPQ & Revenue Cloud",
        "Product configuration",
        "Pricing & quoting",
        "Contract management",
        "Billing automation"
      ],
      color: "from-indigo-500 to-blue-500",
      bgLight: "bg-indigo-50",
      textColor: "text-indigo-600",
      link: "/quote-to-cash"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">

      <div className="container-wide section-padding">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">

          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Salesforce product expertise across the 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}entire lifecycle
              </span>
            </h2>

            <p className="text-gray-600 text-lg">
              From lead to cash, and service to loyalty - I help you leverage the full Salesforce platform.
            </p>
          </div>

          <Link 
            to="/expertise"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mt-4 lg:mt-0 group"
          >
            <span className="font-medium">View all expertise</span>

            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
          </Link>

        </div>

        {/* Product Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {products.map((product,index)=>{

            const Icon = product.icon;

            return(

              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >

                {/* Hover Gradient */}

                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none z-0`} />

                {/* Content */}

                <div className="relative z-10">

                  {/* Icon */}

                  <div className={`inline-flex p-3 ${product.bgLight} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${product.textColor}`} />
                  </div>

                  {/* Title */}

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {product.category}
                  </h3>

                  {/* Features */}

                  <ul className="space-y-2 mb-6">

                    {product.items.map((item,i)=>(
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">

                        <CheckCircle className={`w-4 h-4 ${product.textColor} flex-shrink-0 mt-0.5`} />

                        <span>{item}</span>

                      </li>
                    ))}

                  </ul>

                  {/* Learn More */}

                  <Link 
                    to={product.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors group/link"
                  >
                    Learn more

                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform"/>
                  </Link>

                </div>

              </div>

            );

          })}

          {/* Bottom CTA */}

          <div className="lg:col-span-3 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">

            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"/>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">

              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Need the complete picture?
                </h3>

                <p className="text-gray-300 max-w-2xl">
                  I architect end-to-end solutions that connect Sales, Service, Marketing, and Commerce into a unified customer platform.
                </p>

              </div>

              <Link 
                to="/contact"
                className="flex-shrink-0 px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-medium rounded-xl transition-colors inline-flex items-center gap-2 group"
              >

                Discuss your platform

                <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform"/>

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );

};

export default ProductExpertiseSection;