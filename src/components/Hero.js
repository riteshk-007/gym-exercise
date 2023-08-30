import { Button } from "@mui/material";
import React from "react";

function Hero() {
  return (
    <div className="w-full flex flex-wrap">
      <div className="flex flex-col items-start justify-center md:p-40 p-10  md:w-1/2 w-full">
        <h1 className="font-semibold text-red-600 text-3xl">Fitness Club</h1>
        <h1 className="font-semibold text-black text-5xl my-3">
          Sweat, Smile And Repeat
        </h1>
        <div className="my-10">
          <Button variant="outlined" color="error">
            Explore Exercises
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center md:w-1/2 w-full overflow-hidden p-1">
        <img
          src="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3ltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="mb-6 object-cover md:rounded-es-[17.5rem] rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Hero;
