import { useContext } from "react";
import heroImg from "../../images/image-jeremy.png";
import { TimelineContext } from "../utils/contexts";

const HeroCard = () => {
  const timelineContext = useContext(TimelineContext);

  const { timeline = "", handleTimelineSelection = () => {} } = timelineContext;

  return (
    <div className="flex flex-col rounded-lg bg-light_blue text-pale_blue">
      <article className="flex flex-row gap-5 p-6 bg-blue rounded-lg items-center">
        <img
          role="hero"
          src={heroImg}
          className="w-16 rounded-full justify-start border-2 border-white border-solid"
        />
        <article className="text-left">
          <p className="font-light text-[0.937rem]">Report for</p>
          <h1 className="tracking-widest font-light text-xl text-white">
            Jeremy Robson
          </h1>
        </article>
      </article>
      <div className="flex flex-row justify-between p-6 font-light text-lg text-pale_blue">
        <button
          aria-label="on click timeline change"
          onClick={(e) => {
            e.preventDefault();
            handleTimelineSelection("daily");
          }}
          className={`${timeline === "daily" ? "text-white" : ""}`}
        >
          Daily
        </button>
        <button
          aria-label="on click timeline change"
          onClick={(e) => {
            e.preventDefault();
            handleTimelineSelection("weekly");
          }}
          className={`${timeline === "weekly" ? "text-white" : ""}`}
        >
          Weekly
        </button>
        <button
          aria-label="on click timeline change"
          onClick={() => {
            handleTimelineSelection("monthly");
          }}
          className={`${timeline === "monthly" ? "text-white" : ""}`}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
