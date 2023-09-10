import GradientWrapper from "@/components/GradientWrapper";
import Image from "next/image";
import HeroImg from "@/public/images/hero1.svg";
import LayoutEffect from "@/components/LayoutEffect";
import { motion } from "framer-motion";
import Link from 'next/link';

const Hero = () => (
  <section>
    <div className="custom-screen py-28">
      <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <div>
          <div className="space-y-10 max-w-3xl mx-auto text-center">
            <h1
              className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 font-extrabold mx-auto sm:text-6xl  hover:opacity-100 transition-all duration-1000"
              style={{
                backgroundSize: "100%",
                paddingRight: "0.25em",
                paddingBottom: "0.3em",
              }}
            >
              Tendertulip Software
            </h1>
            <p className="max-w-xl mx-auto text-gray-300">
              Your Future Begins Here... with{" "}
              <span className="font-semibold">Tendertulip Software</span>{" "}
              Explore Limitless Possibilities for Your Business Growth.
            </p>
            <div className="flex justify-center font-medium text-sm">
              <Link legacyBehavior href="/">
                <a className="flex items-center justify-center gap-x-2 ring-1 ring-purple-500 ring-opacity-50 hover:ring-opacity-100 hover:gap-x-2 py-2 px-5 text-gray-100 font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex backdrop-blur-sm hover:text-purple-500">
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <motion.div
            transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 }
              }}
          >
            <GradientWrapper
                className="mt-16 sm:mt-28"
                wrapperClassName="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]"
            >
                <Image
              src={HeroImg}
              className="shadow-lg rounded-2xl opacity-100"
              alt="Tendertulip"
              />
            </GradientWrapper>
            
          </motion.div>
        </div>
      </LayoutEffect>
    </div>
  </section>
);

export default Hero;
