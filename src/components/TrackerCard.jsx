import { useState } from "react";
import moreIcon from "../../images/icon-ellipsis.svg";

const ICON_LIST = {
  Work: "bg-work bg-light_red_work",
  Play: "bg-play bg-soft_blue_play",
  Study: "bg-study bg-light_red_study",
  Exercise: "bg-exercise bg-lime_green_exclusive",
  Social: "bg-social bg-violet",
  "Self Care": "bg-selfcare bg-soft_orange",
};

const TrackerCard = ({ activityObj, timelineSelected, index }) => {
  const [isActive, setIsActive] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { title = "", timeframes = {} } = activityObj;

  const { current, previous } = timeframes[timelineSelected];

  const getPreviousTimeline = () => {
    let capitaliseFirstLetter = timelineSelected.charAt(0).toUpperCase();
    if (timelineSelected !== "daily") {
      capitaliseFirstLetter += timelineSelected.slice(
        1,
        timelineSelected.length - 2
      );
      return `Last ${capitaliseFirstLetter} - ${previous}hrs`;
    } else {
      capitaliseFirstLetter = "Yesterday";
      return `${capitaliseFirstLetter} - ${previous}hrs`;
    }
  };

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const handleCopy = () => {
    const copyText = getPreviousTimeline();
    navigator.clipboard.writeText(copyText);
    setIsCopied(true);
  };

  return (
    <article
      className={`relative flex flex-col justify-end align-middle rounded-2xl pt-[2.1rem] h-full w-full ${ICON_LIST[title]} bg-no-repeat`}
    >
      <article className="h-full rounded-2xl relative bg-dark_blue p-8 hover:bg-light_blue flex flex-col justify-center">
        <div className="flex flex-row justify-between items-center">
          <p className="text-left font-light">{title}</p>
          <button
            type="button"
            aria-describedby="More options to copy"
            aria-label="more options"
            aria-haspopup="true"
            aria-expanded={isActive}
            aria-controls={`tooltip-${index}`}
            onClick={toggleActive}
            className="z-20 p-1"
          >
            <img
              alt="more icon on click"
              src={moreIcon}
              width={25}
              height={5}
            />
          </button>
          <div
            id={`tooltip-${index}`}
            role="tooltip"
            className="tooltip | invisible absolute  -translate-x-1/2 transition-all"
          >
            <button
              type="button"
              className="rounded-2xl px-4 py-2 bg-very_light_blue"
              onClick={handleCopy}
            >
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
        {timeframes[timelineSelected] && (
          <div className="flex flex-row justify-between items-center flex-wrap pt-4">
            <h3 className="font-hours font-light">{current}hrs</h3>
            <p className="text-sm font-thin text-pale_blue p-1">
              {getPreviousTimeline()}
            </p>
          </div>
        )}
      </article>
    </article>
  );
};

export default TrackerCard;
