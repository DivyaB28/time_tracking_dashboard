import iconWork from "../../images/icon-work.svg";
const TrackerCard = () => {
  return (
    <article className="">
      <img src={iconWork} />
      <article>
        <p>Work </p>
        <div>
          <h1>32hrs</h1>
          <p>Last Week - 36hrs</p>
        </div>
      </article>
    </article>
  );
};

export default TrackerCard;
