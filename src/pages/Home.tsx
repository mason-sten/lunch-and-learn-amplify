import React from "react";
import watch from "../assets/watch.gif";
const Home: React.FC = () => {
  return (
    <div>
      <img className="max-w-[450px] mx-auto p-2 m-4 bg-white rounded-full" src={watch} alt="neighborhood watch" />
      <h1 className="text-center font-thin">DeveloperTown Neighborhood Watch</h1>
    </div>
  );
};

export default Home;
