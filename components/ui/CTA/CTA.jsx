import GradientWrapper from "@/components/GradientWrapper"
import Image from "next/image"
import NavLink from "../NavLink"
import bgPattern from "@/public/images/bg-pattern.webp"
import LayoutEffect from "@/components/LayoutEffect"
import { motion } from "framer-motion";

const CTA = () => (
    <section>
        <GradientWrapper wrapperClassName="max-w-xs h-[13rem] top-12 inset-0">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} className="custom-screen py-28 relative">
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-6"
                    }}
                >
                    <div className="relative z-10">
                        <div className="max-w-xl mx-auto text-center space-y-10">
                            <h2 className="text-cyan-200 text-3xl font-semibold sm:text-4xl">
                                Ready To <span className="text-cyan-500">Enhance Your Productivity?</span>
                            </h2>
                            <p className="mt-5 text-cyan-500 font-semibold">
                                Tendertulip Software is the perfect answer! Our Software-based Company platform enables you to create highly targeted Applications that are tailored to each individual.
                            </p>
                        </div>
                        <div className="mt-5 flex justify-center font-medium text-sm">
                            <NavLink
                                href="/#pricing"
                                className="flex items-center justify-center gap-x-0 ring-1 ring-cyan-500 ring-opacity-50 hover:text-cyan-500 hover:ring-opacity-100 hover:gap-x-2 py-2 px-5 text-gray-300 font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex transition-all duration-1000 "
                            >
                                Start Now
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                </LayoutEffect>
                <Image
                    src={bgPattern}
                    className="w-full h-full object-cover m-auto absolute inset-0 pointer-events-none"
                    alt="Background pattern"
                />
            </motion.div>
        </GradientWrapper>
    </section>
)

export default CTA