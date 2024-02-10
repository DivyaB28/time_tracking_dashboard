const TrackerCard = ({ activityObj, timelineSelected }) => {
  const { title = "", timeframes = {} } = activityObj;

  const { current, previous } = timeframes[timelineSelected];

  const getPreviousTimeline = () => {
    const capitaliseFirstLetter =
      timelineSelected.charAt(0).toUpperCase() +
      timelineSelected.slice(1, timelineSelected.length - 2);
    return `Last ${capitaliseFirstLetter} - ${previous}hrs`;
  };

  return (
    <article className="max-w-40 max-h-20">
      <div className="icon-work bg-light_red_work h-full">
        <article>
          <p>{title}</p>
          {timeframes[timelineSelected] && (
            <div>
              <h1>{current}hrs</h1>
              <p>{getPreviousTimeline()}</p>
            </div>
          )}
        </article>
      </div>
    </article>
  );
};

export default TrackerCard;
