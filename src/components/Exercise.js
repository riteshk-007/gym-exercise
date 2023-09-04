import React, { useEffect, useState } from "react";
import { exercisesOptions, fetchData } from "../utils/FetchData";
import ExercisesCard from "./ExercisesCard";
import { Pagination, Stack } from "@mui/material";
function Exercise({ setExercises, bodyPart, exercises }) {
  const [currentPage, setCurentPage] = useState(1);
  const exercisesPerPage = 12;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurentPage(value);
    window.scrollTo({ top: 1330, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exercisesOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exercisesOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart, setExercises]);
  return (
    <div className="flex md:w-4/5 items-center md:items-start justify-center md:justify-start flex-col m-auto">
      <p className="font-bold uppercase text-4xl">Showing Results</p>
      <div className="flex w-full flex-wrap gap-4 items-center md:items-start justify-center md:justify-start mt-5">
        {currentExercises?.map((item, index) => (
          <ExercisesCard key={index} exercises={item} />
        ))}
      </div>
      <div className="w-full m-auto">
        <Stack mt="50px" mb="20px" alignItems="center">
          {exercises.length > 9 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
              variant="outlined"
            />
          )}
        </Stack>
      </div>
    </div>
  );
}

export default Exercise;
