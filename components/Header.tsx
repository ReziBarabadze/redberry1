"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CreatEmployee from "./CreatEmployee";

const Header = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <>
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
        <Link href="/taskpage" style={{ textDecoration: "none" }}>
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
            <Image
              src="images/Hourglass.svg"
              alt="icon"
              width={38}
              height={38}
            />
          </Box>
        </Link>
        <Box sx={{ display: "flex", gap: "40px" }}>
          <Button
            onClick={() => setOpenPopup(true)}
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
          <Link href="/createtask">
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
          </Link>
        </Box>
      </Box>
      {openPopup && (
        <>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 20,
            }}
          >
            <Box
              sx={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#FFF",
                paddingInline: "40px",
                paddingBlock: "30px",
                borderRadius: "10px",
                zIndex: 21,
                minWidth: "700px",
                minHeight: "600px",
              }}
            >
              <CreatEmployee setOpenPopup={setOpenPopup} />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Header;
