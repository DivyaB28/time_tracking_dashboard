import { TimelineContext } from "../utils/contexts";
import HeroCard from "./HeroCard";
import TrackerCard from "./TrackerCard";
import { useEffect, useState } from "react";
const PATH = "../../data.json";

const Main = () => {
  const [userData, setUserData] = useState([]);
  const [timeline, setTimeline] = useState("weekly");

  const fetchData = () => {
    fetch(PATH)
      .then((response) => response.json())
      .then((data) => setUserData([...data]));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTimelineSelection = (selected) => {
    setTimeline(selected);
  };

  return (
    <>
      <TimelineContext.Provider value={{ timeline, handleTimelineSelection }}>
        <main className="grid max-w-[69.375] gap-4 md:grid-rows-3 md:grid-flow-col bg-very_dark_blue px-6 py-14">
          <div role="article" className="lg:row-span-3">
            <HeroCard />
          </div>
          <ul role="list">
            {userData &&
              userData.map((activity, index) => (
                <li role="lit of activities" key={index}>
                  <TrackerCard
                    activityObj={activity}
                    timelineSelected={timeline}
                  />
                </li>
              ))}
          </ul>
        </main>
      </TimelineContext.Provider>
    </>
  );
};

export default Main;
