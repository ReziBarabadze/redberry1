import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffff",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: "120px",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 10,
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ display: "flex", cursor: "pointer" }}>
        <Typography
          sx={{
            fontFamily: "Fredoka One",
            fontWeight: 400,
            fontSize: "31px",
            lineHeight: "100%",
            color: "#8338EC",
            marginRight: "4px",
          }}
        >
          Momentum
        </Typography>
        <Image src="images/Hourglass.svg" alt="icon" width={38} height={38} />
      </Box>
      <Box sx={{ display: "flex", gap: "40px" }}>
        <Button
          sx={{
            fontFamily: "FiraGO",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "100%",
            border: "1px solid #8338EC",
            color: "#212529",
            width: "225px",
            height: "40px",
            borderRadius: "5px",
          }}
        >
          თანამშრომლის შექმნა
        </Button>
        <Button
          sx={{
            fontFamily: "FiraGO",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "100%",
            color: "#FFFFFF",
            backgroundColor: "#8338EC",
            width: "268px",
            height: "40px",
          }}
        >
          <span style={{ fontSize: "20px", marginRight: "4px" }}>+</span>{" "}
          შექმენი ახალი დავალება
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
