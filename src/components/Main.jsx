import HeroCard from "./HeroCard";
import TrackerCard from "./TrackerCard";

const Main = () => {
  return (
    <>
      <main className="grid max-w-[69.375] gap-4 md:grid-rows-3 md:grid-flow-col bg-very_dark_blue px-6 py-14">
        <div role="article" className="lg:row-span-3">
          <HeroCard />
        </div>
        <TrackerCard />
        <TrackerCard />
        <TrackerCard />
        <TrackerCard />
        <TrackerCard />
        <TrackerCard />
      </main>
    </>
  );
};

export default Main;
