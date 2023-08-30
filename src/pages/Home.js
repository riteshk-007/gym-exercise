import React from "react";
import Exercise from "../components/Exercise";
import Hero from "../components/Hero";
import Search from "../components/Search";

function Home() {
  return (
    <div>
      <Hero />
      <Search />
      <Exercise />
    </div>
  );
}

export default Home;
