import React, { useEffect, useState } from "react";
import { exercisesOptions, fetchData } from "../utils/FetchData";
import HorizontalScroll from "./HorizontalScroll";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

function Search({ setExercises, setBodyPart, bodyPart }) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exercisesOptions
      );
      setBodyParts(["all", ...bodyPartData]);
    };
    fetchExercisesData();
  }, [setBodyPart]);
  const handleClick = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exercisesOptions
      );
      const searchExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchExercises);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              outline: "none",
            },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            outline: "none",
            border: "none",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="hover:text-black"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleClick}
        >
          Search
        </Button>
      </Box>
      <Stack
        sx={{ position: "relative", width: "100%", p: "20px" }}
        direction="row"
      >
        <HorizontalScroll
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Stack>
    </Stack>
  );
}

export default Search;
