import React from "react";

function Detail({ exerciseDetail }) {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: "/waist.png",
      name: bodyPart,
    },
    {
      icon: "/bodypart.png",
      name: target,
    },
    {
      icon: "/weight.png",
      name: equipment,
    },
  ];

  return (
    <div className="flex items-center justify-center flex-wrap my-5 mx-2">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src={gifUrl}
          alt={name}
          className="h-[400px] rounded-md"
          loading="lazy"
        />
      </div>
      <div className="flex items-start justify-start flex-col p-2 my-2 w-full md:w-1/2">
        <h1 className="text-2xl md:text-4xl font-bold capitalize">{name}</h1>
        <h3 className="my-4">
          Exercises keep you strong.
          <span style={{ textTransform: "capitalize" }}> {name}</span> is one of
          the best exercises to target your {target}. It will help you improve
          your mood and gain energy.
        </h3>
        <div>
          {extraDetail?.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-2 my-2"
            >
              <img
                src={item?.icon}
                alt={item?.name}
                className="h-14 p-2 rounded-full bg-gradient-to-l from-black/20 to-red-600/20"
              />
              <span className="font-semibold capitalize">{item?.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Detail;
