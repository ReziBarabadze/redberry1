"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface ReplayProps {
  name: string;
  message: string;
  avatarUrl: string;
}

const Reply: React.FC<ReplayProps> = ({ name, message, avatarUrl }) => {
  return (
    <Box
      component="article"
      sx={{
        marginLeft: "50px",
        marginTop: "20px",
        display: "flex",
        gap: "12px",
        alignItems: "flex-start",
      }}
    >
      <Image
        src={avatarUrl}
        alt="img"
        width={38}
        height={38}
        style={{ borderRadius: "50%" }}
      />
      <Box component="div">
        <Typography
          component="h3"
          sx={{
            fontFamily: "FiraGO",
            fontWeight: 500,
            fontSize: "18px",
            color: "#021526",
            marginBottom: "8px",
          }}
        >
          {name}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontFamily: "FiraGO",
            fontWeight: 350,
            fontSize: "16px",
            color: "#021526",
          }}
        >
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

export default Reply;
