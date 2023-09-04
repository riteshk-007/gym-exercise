import { Link } from "react-router-dom";
import React from "react";

function ExercisesCard({ exercises }) {
  return (
    <Link
      to={`/exercise/${exercises.id}`}
      className="cursor-pointer relative h-[430px] bg-white rounded-md overflow-hidden hover:scale-[1.03] transition-all duration-200 hover:shadow-2xl"
    >
      <img
        src={exercises.gifUrl}
        alt={exercises.name}
        loading="lazy"
        className="h-auto relative"
      />
      <div className="absolute left-2 bottom-10 flex gap-2">
        <button className="text-sm capitalize py-1 px-2 font-medium rounded-full text-white bg-red-500">
          {exercises.bodyPart}
        </button>
        <button className="text-sm capitalize py-1 px-2 font-medium rounded-full text-white bg-black">
          {exercises.target}
        </button>
      </div>
      <div className="absolute bottom-1 left-2 text-sm font-bold capitalize">
        {exercises.name}
      </div>
    </Link>
  );
}

export default ExercisesCard;
