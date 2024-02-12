const ICON_LIST = {
  Work: "bg-work bg-light_red_work",
  Play: "bg-play bg-soft_blue_play",
  Study: "bg-study bg-light_red_study",
  Exercise: "bg-exercise bg-lime_green_exclusive",
  Social: "bg-social bg-violet",
  "Self Care": "bg-selfcare bg-soft_orange",
};

const TrackerCard = ({ activityObj, timelineSelected }) => {
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

  return (
    <article
      className={`relative flex flex-col justify-end align-middle rounded-2xl pt-[2.1rem] h-full w-full ${ICON_LIST[title]} bg-no-repeat`}
    >
      <article className="h-full rounded-2xl relative bg-dark_blue p-8 hover:bg-light_blue flex flex-col justify-center">
        <p className="text-left font-light">{title}</p>

        {timeframes[timelineSelected] && (
          <div className="flex flex-row justify-between items-center flex-wrap pt-4">
            <h1 className="font-hours font-light">{current}hrs</h1>
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
