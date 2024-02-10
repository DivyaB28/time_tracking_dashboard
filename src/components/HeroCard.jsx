import heroImg from "../../images/image-jeremy.png";
const HeroCard = () => {
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
      <div className="flex flex-row justify-between p-6 font-light text-lg">
        <button>Daily</button>
        <button>Weekly</button>
        <button>Monthly</button>
      </div>
    </div>
  );
};

export default HeroCard;
