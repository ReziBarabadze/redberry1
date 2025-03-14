"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useRouter } from "next/navigation";
const Card = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "300px",
        height: "217px",
        borderRadius: "15px",
        border: "1px solid",
        borderColor: "#F7BC30",
        padding: "10px",
        cursor: "pointer",
      }}
      onClick={() => router.push("/taskinside")}
    >
      <Box>
        {/* TOP */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                border: "0.5px solid #F7BC30",
                borderRadius: "4px",
                width: "86px",
                padding: "4px",
              }}
            >
              <Image
                src="images/-- icon.svg"
                alt="icon"
                width={16}
                height={18}
              />
              <Typography
                sx={{
                  fontFamily: "FiraGO",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "#FFBE0B",
                }}
              >
                საშუალო
              </Typography>
            </Box>
            <Typography
              sx={{
                backgroundColor: "#FF66A8",
                color: "#FFFFFF",
                borderRadius: "15px",
                width: "88px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "24px",
              }}
            >
              დიზაინი
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontFamily: "FiraGO",
              fontWeight: 400,
              color: "#212529",
            }}
          >
            22 იანვ, 2022
          </Typography>
        </Box>
      </Box>
      {/* MIDDLE */}
      <Box
        sx={{
          marginTop: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "FiraGO",
            fontWeight: 500,
            fontSize: "15px",
            color: "#212529",
            textAlign: "start",
            marginBottom: "7px",
          }}
        >
          Redberry-ს საიტის ლენდინგის დიზაინი{" "}
        </Typography>
        <Typography>
          შექმენი საიტის მთავარი გვერდი, რომელიც მოიცავს მთავარ სექციებს,
          ნავიგაციას.
        </Typography>
      </Box>
      {/* BOTTOM */}
      <Box
        sx={{
          marginTop: "8px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Image src="/images/user.png" alt="user-img" width={30} height={30} />
        <Box sx={{ display: "flex" }}>
          <ChatBubbleOutlineIcon sx={{ marginRight: "4px" }} />
          <Typography>8</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
