import LayoutEffect from "@/components/LayoutEffect";

export const Stats = () => {
  return (
    <LayoutEffect
      className="duration-1000 delay-500"
      isInviewState={{ trueState: "opacity-1", falseState: "opacity-0" }}
    >
      <div className="bg-indigo-600 bg-opacity-50  ring-2 ring-purple-500 ">
        <div className="max-w-screen-xl mx-auto px-4 py-3 text-white sm:text-center md:px-8 flex justify-center items-center">
          <p className="font-medium">
            Under Development
          </p>
        </div>
      </div>
    </LayoutEffect>
  );
};

export default Stats;
