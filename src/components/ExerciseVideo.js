import React from "react";
import Loader from "./Loader";

const ExerciseVideo = ({ exerciseVideo, name }) => {
  if (!exerciseVideo?.length) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col md:p-5 p-2">
      <h2 className="font-bold md:text-4xl text-2xl">
        Watch <span className="text-red-600">{name} </span> exercise videos
      </h2>
      <div className="flex my-10 flex-wrap md:p-5 overflow-hidden">
        {exerciseVideo?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="w-full md:w-96 mx-1 my-8 md:h-56"
            href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderRadius: "10px" }}
              src={item?.video?.thumbnails[0]?.url}
              alt={item?.video?.title}
              className="w-full object-cover"
            />
            <p className="font-bold text-ellipsis overflow-hidden whitespace-nowrap text-lg">
              {item?.video?.title}
            </p>
            <p> {item?.video?.channelName}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideo;
