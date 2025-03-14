import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Reply = () => {
  return (
    <Box
      sx={{
        marginLeft: "50px",
        marginTop: "20px",
        display: "flex",
        gap: "12px",
      }}
    >
      <Image src="/images/replyimage.png" alt="img" width={38} height={38} />
      <Box>
        <Typography
          sx={{
            fontFamily: "FiraGO",
            fontWeight: 500,
            fontSize: "18px",
            color: "#021526",
            marginBottom: "8px",
          }}
        >
          ნატალია გიორგაძე
        </Typography>
        <Typography
          sx={{
            fontFamily: "FiraGO",
            fontWeight: 350,
            fontSize: "16px",
            color: "#021526",
          }}
        >
          დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი იქნება.
        </Typography>
      </Box>
    </Box>
  );
};

export default Reply;
