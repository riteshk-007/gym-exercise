import React from "react";
import BodyPart from "./BodyPart";

function HorizontalScroll({ data, bodyParts, setBodyPart, bodyPart }) {
  return (
    <div className="flex w-full flex-wrap gap-3 items-center justify-evenly">
      {data.map((item) => (
        <div key={item}>
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        </div>
      ))}
    </div>
  );
}

export default HorizontalScroll;
