import React, { useState } from "react";
import Exercise from "../components/Exercise";
import Hero from "../components/Hero";
import Search from "../components/Search";

function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <div>
      <Hero />
      <Search
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </div>
  );
}

export default Home;
