import { TimelineContext } from "../utils/contexts";
import HeroCard from "./HeroCard";
import TrackerCard from "./TrackerCard";
import { useEffect, useState } from "react";

const Main = () => {
  const [userData, setUserData] = useState([]);
  const [timeline, setTimeline] = useState("weekly");

  const fetchData = () => {
    fetch("/data.json")
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
        <h1 className="sr-only">Time tracking dashboard</h1>
        <main className="grid gap-5 max-w-[69.375rem] lg:grid-cols-[0.9273fr_3fr] lg:flex lg:items-center lg:justify-center px-6 py-14 mx-auto">
          <HeroCard />
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1.875rem]">
            {userData &&
              userData.map((activity, index) => (
                <li role="list of activities" key={index}>
                  <TrackerCard
                    activityObj={activity}
                    timelineSelected={timeline}
                    index={index}
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
