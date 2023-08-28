import SectionWrapper from "@/components/SectionWrapper"
import GradientWrapper from "@/components/GradientWrapper"
import user1 from "@/public/testimonial/user1.jpg"
import user2 from "@/public/testimonial/user2.webp"
import user3 from "@/public/testimonial/user3.webp"
import user4 from "@/public/testimonial/user4.webp"
import user5 from "@/public/testimonial/user5.webp"
import user6 from "@/public/testimonial/user6.webp"
import Image from "next/image"
import LayoutEffect from "@/components/LayoutEffect"
import { motion } from "framer-motion";

const Testimonial = () => {

    const testimonials = [
        {
          avatar: user1,
          name: "Winston Churchill",
          title: "Former Prime Minister of the UK",
          quote: "I may be a statesman, but even I can't resist the allure of Tendertulip Software. They make software buying a piece of cake!"
        },
        {
          avatar: user2,
          name: "Albert Einstein",
          title: "Theoretical Physicist",
          quote: "E=MC²? More like Tendertulip Software = Fun! never thought I'd say that about software, but they've done it!"
        },
        {
          avatar: user3,
          name: "Columbus",
          title: "Explorer",
          quote: "I sailed the ocean blue, but it was Tendertulip Software that helped me navigate the digital sea."
        },
        {
          avatar: user4,
          name: "Abraham Lincoln",
          title: "16th President of the United States",
          quote: "Four score and seven software purchases ago, I discovered Tendertulip Software. It's been a game-changer."
        },
        {
          avatar: user5,
          name: "Cleopatra",
          title: "Queen of Egypt",
          quote: "As the Queen of the Nile, I have high standards. Tendertulip Software met them all. I'm impressed!"
        },
        {
          avatar: user6,
          name: "Confucius",
          title: "Chinese Philosopher",
          quote: "Confucius say: 'Tendertulip Software is the path to software enlightenment.'"
        },
      ];

    return (
        <SectionWrapper>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} id="testimonials" className="custom-screen text-gray-300">
                <div className="max-w-2xl text-center md:mx-auto">
                    <h2 className="text-blue-500 text-3xl font-semibold sm:text-4xl ">
                        <span className="font-bold hover:underline cursor-pointer">Tendertulip Software</span> is loved by the best founders around the world
                    </h2>
                </div>
                <GradientWrapper wrapperClassName="max-w-sm h-40 top-12 inset-x-0" className="mt-12 ">
                    <LayoutEffect
                        className="duration-1000 delay-300"
                        isInviewState={{
                            trueState: "opacity-1",
                            falseState: "opacity-0 translate-y-12"
                        }}
                    >
                        <ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3 ">
                            {
                                testimonials.map((item, idx) => (
                                    <li key={idx} className="p-4 rounded-xl border border-blue-700 bg-gray-900 bg-opacity-60 backdrop-blur-lg"
                                        style={{
                                            backgroundImage: "radial-gradient(100% 100% at 50% 50%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 100%)"
                                        }}
                                    >
                                        <figure className="flex flex-col justify-between gap-y-6 h-full">
                                            <blockquote className="">
                                                <p className="">
                                                    {item.quote}
                                                </p>
                                            </blockquote>
                                            <div className="flex items-center gap-x-4">
                                                <Image
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    className="w-14 h-14 rounded-full object-cover"
                                                />
                                                <div>
                                                    <span className="block text-gray-50 font-semibold">{item.name}</span>
                                                    <span className="block text-sm mt-1">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ))
                            }
                        </ul>
                    </LayoutEffect>
                </GradientWrapper>
            </motion.div>
        </SectionWrapper>
    )
}

export default Testimonial