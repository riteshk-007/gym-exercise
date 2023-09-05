import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  exercisesOptions,
  fetchData,
  youtubeOptions,
} from "../utils/FetchData";
import Detail from "../components/Detail";
import ExerciseVideo from "../components/ExerciseVideo";

function ExerciseDetails() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
        const youtubeSearchUrl =
          "https://youtube-search-and-download.p.rapidapi.com";

        const exerciseDetailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exercisesOptions
        );
        setExerciseDetail(exerciseDetailData);

        const exerciseVideosData = await fetchData(
          `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
          youtubeOptions
        );
        setExerciseVideo(exerciseVideosData?.contents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchExercisesData();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="w-full flex flex-col">
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideo={exerciseVideo} name={exerciseDetail.name} />
    </div>
  );
}

export default ExerciseDetails;
