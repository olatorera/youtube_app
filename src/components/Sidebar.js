import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/Constants";
import { Category } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((Category) => (
        <button></button>
      ))}
    </Stack>
  );
};

export default Sidebar;
