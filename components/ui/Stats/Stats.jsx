import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <SectionWrapper id="pricing" className="custom-screen">
      <div
        ref={ref}
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-cyan-500"
      >
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          {isVisible && (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="text-center md:border-r"
              >
                <CountUp className="font-semibold text-5xl" start={0} end={144000} duration={3}>
                  {({ countUpRef }) => (
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                      <span ref={countUpRef} />+
                    </h6>
                  )}
                </CountUp>
                <p className="text-sm font-medium tracking-widest text-cyan-600 uppercase lg:text-base py-4">
                  Downloads
                </p>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-center md:border-r"
              >
                <CountUp className="font-semibold text-5xl" start={0} end={490000} duration={3}>
                  {({ countUpRef }) => (
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                      <span ref={countUpRef} />+
                    </h6>
                  )}
                </CountUp>
                <p className="text-sm font-medium tracking-widest text-cyan-600 uppercase lg:text-base py-4">
                  Fans
                </p>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-center md:border-r"
              >
                <CountUp className="font-semibold text-5xl" start={0} end={300000} duration={3}>
                  {({ countUpRef }) => (
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                      <span ref={countUpRef} />+
                    </h6>
                  )}
                </CountUp>
                <p className="text-sm font-medium tracking-widest text-cyan-600 uppercase lg:text-base py-4">
                  Customers
                </p>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-center"
              >
                <CountUp className="font-semibold text-5xl" start={0} end={100} duration={3}>
                  {({ countUpRef }) => (
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                      <span ref={countUpRef} />+
                    </h6>
                  )}
                </CountUp>
                <p className="text-sm font-medium tracking-widest text-cyan-600 uppercase lg:text-base py-4 ">
                  Countries
                </p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};


export default Stats;


  