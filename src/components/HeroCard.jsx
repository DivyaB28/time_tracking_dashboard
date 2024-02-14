import { useContext } from "react";
import heroImg from "../../images/image-jeremy.png";
import { TimelineContext } from "../utils/contexts";

const HeroCard = () => {
  const timelineContext = useContext(TimelineContext);

  const { timeline = "", handleTimelineSelection = () => {} } = timelineContext;

  return (
    <div className="flex flex-col rounded-2xl bg-light_blue text-pale_blue h-full">
      <section className="flex flex-row gap-5 p-6 bg-blue rounded-2xl items-center lg:min-h-64 lg:flex-col lg:items-start lg:gap-[2.375rem] lg:heroinfo">
        <img
          alt="hero profile"
          src={heroImg}
          width={64}
          height={64}
          className="rounded-full justify-start border-2 border-white border-solid lg:w-[5.25rem] "
        />

        <p className="font-light text-[0.937rem] flex flex-col text-pale-blue ml-[0.25rem]">
          Report for
          <span className="sfont-light text-white font-title font-light">
            Jeremy Robson
          </span>
        </p>
      </section>
      <div className="flex flex-row justify-between p-6 font-light text-lg text-pale_blue md:justify-around lg:flex-col  lg:items-start ">
        <button
          type="button"
          aria-label="on click timeline change"
          onClick={(e) => {
            e.preventDefault();
            handleTimelineSelection("daily");
          }}
          className={`${timeline === "daily" ? "text-white" : ""} md:my-3`}
        >
          Daily
        </button>
        <button
          type="button"
          aria-label="on click timeline change"
          onClick={(e) => {
            e.preventDefault();
            handleTimelineSelection("weekly");
          }}
          className={`${timeline === "weekly" ? "text-white" : ""} md:my-3`}
        >
          Weekly
        </button>
        <button
          type="button"
          aria-label="on click timeline change"
          onClick={() => {
            handleTimelineSelection("monthly");
          }}
          className={`${timeline === "monthly" ? "text-white" : ""} md:my-3`}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
