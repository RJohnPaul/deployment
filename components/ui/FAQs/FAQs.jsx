import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";


const faqsList = [
    {
        q: "What software solutions does Tendertulip Software offer?",
        a: "Tendertulip Software offers a wide range of software solutions, including custom software development, web and mobile app development, cloud-based software, and more. We specialize in delivering cutting-edge software tailored to meet your specific business needs.",
    },
    {
        q: "How can Tendertulip Software help my business succeed?",
        a: "Tendertulip Software is dedicated to helping your business thrive by providing innovative software solutions. Whether you need to streamline your operations, reach new customers, or improve your online presence, our software can make a significant impact on your success.",
    },
    {
        q: "Do you offer software customization services?",
        a: "Yes, we offer software customization services to ensure that our solutions align perfectly with your business requirements. Our experienced team can tailor our software to suit your unique needs, allowing you to achieve maximum efficiency and productivity.",
    },
    {
        q: "What industries benefit from Tendertulip Software' solutions?",
        a: "Tendertulip Software serves a diverse range of industries, including healthcare, finance, e-commerce, education, and more. Our adaptable software solutions can be tailored to fit the specific demands of your industry, helping you stay competitive.",
    },
    {
        q: "Can I resell Tendertulip Software' products?",
        a: "Yes, Tendertulip Software offers reseller programs for our software products. If you're interested in becoming a reseller and offering our cutting-edge solutions to your clients, please contact our sales team for more information.",
    },
    {
        q: "What sets Tendertulip Software apart from other software providers?",
        a: "At Tendertulip Software, we distinguish ourselves through our commitment to innovation, quality, and customer satisfaction. Our team of experts continuously strives to deliver software solutions that exceed expectations, ensuring your business stays ahead of the curve.",
    }
]


const FAQs = () => (
    <SectionWrapper id="faqs">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}  className="custom-screen text-gray-300">
           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
                    Everything you need to know
                </h2>
                <p className="mt-3">
                    Here are the most questions people always ask about.
                </p>
            </motion.div>
            <div className='mt-12'>
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-12"
                    }}
                >
                    <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                        {faqsList.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3"
                            >
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-100">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='leading-relaxed'>
                                </p>
                            </li>
                        ))}
                    </ul>
                </LayoutEffect>
            </div>
        </motion.div>
    </SectionWrapper>
)

export default FAQs