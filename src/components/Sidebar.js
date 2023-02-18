import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/Constants";
// import { category } from "../utils/Constants";

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
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background: category.color,
          }}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
