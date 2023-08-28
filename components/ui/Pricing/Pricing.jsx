import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "../Button";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      desc: "For new creators building their list",
      price: 5,
      isMostPop: false,
      isBasic: true,
      isBuis: false,
      features: [
        "Limited Access to Products",
        "Regular",
        "Single-user-Software access",
        "Prompt support for software queries",
        "Licensed",
      ],
    },
    {
      name: "Starter",
      desc: "Ideal for growing businesses",
      price: 12,
      isMostPop: true,
      isBasic: false,
      isBuis: false,
      features: [
        "Unlimited Access to Products",
        "Regular",
        "Two-user-Software access",
        "Prioritized Helpline (24/7)",
        "Flexible licensing options",
      ],
    },
    {
      name: "Business",
      desc: "Built for marketing managers",
      price: 32,
      isMostPop: false,
      isBasic: false,
      isBuis: true,
      features: [
        "Unlimited Access to Products",
        "Regular + Beta Versions",
        "Multi-user-Software access",
        "Prioritized Helpline (24/7)",
        "Free of License",
      ],
    },
  ];

  const mostPopPricingBg =
    "radial-gradient(130.39% 130.39% at 51.31% -0.71%, #1F2937 0%, rgba(31, 41, 55, 0) 100%)";

  return (
    <SectionWrapper id="pricing" className="custom-screen">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} className="relative max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl xs:text-3xl">
          <span className="text-blue-600">Find a plan </span><span className="text-purple-600">to power</span><span className="text-yellow-600"> your business</span> 
        </h2>
      </motion.div>
      <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col rounded-xl border transition-all mt-6 sm:mt-0 ${
                item.isMostPop
                  ? "border-purple-500"
                  : item.isBasic
                  ? "border-blue-600"
                  : item.isBuis
                  ? "border-yellow-600"
                  : "border-yellow-700 border-opacity-100"
              }`}
              style={{
                backgroundImage: item.isMostPop ? mostPopPricingBg : "",
              }}
            >
              <div className="p-8 space-y-4 border-b border-gray-800 text-center">
                <span
                  className={
                    item.isMostPop
                      ? "text-purple-600 font-medium"
                      : item.isBasic
                      ? "text-blue-600 font-medium"
                      : item.isBuis
                      ? "text-yellow-600 font-medium"
                      : ""
                  }
                >
                  {item.name}
                </span>
                <div className="text-gray-50 text-3xl font-semibold">
                  ${item.price}{" "}
                  <span className="text-xl text-gray-400 font-normal">/mo</span>
                </div>
                <p className="text-gray-400">{item.desc}</p>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {item.features.map((featureItem, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-5 text-gray-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {featureItem}
                    </li>
                  ))}
                </ul>
                <div className="pt-8">
                  <Button
                    className={`w-full rounded-full transition-transform transform hover:-translate-y-1 text-black focus:ring ${
                      item.isMostPop
                        ? "bg-purple-600 hover:bg-purple-500 focus:bg-purple-700 ring-purple-600"
                        : item.isBasic
                        ? "bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 ring-blue-600"
                        : item.isBuis
                        ? "bg-yellow-600 hover:bg-yellow-500 focus:bg-yellow-600 ring-yellow-500"
                        : "bg-gray-800 hover:bg-gray-700 ring-1 ring-yellow-500 hover:bg-yellow-700"
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </LayoutEffect>
    </SectionWrapper>
  );
};

export default Pricing;
