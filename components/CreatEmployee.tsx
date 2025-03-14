"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

interface Props {
  setOpenPopup: (open: boolean) => void;
}

const CreatEmployee = ({ setOpenPopup }: Props) => {
  const [hasImage, setHasImage] = useState(true);
  const deleteImage = () => {
    setHasImage(false);
  };
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Image
          src="/images/X.png"
          alt="icon"
          width={30}
          height={30}
          style={{ cursor: "pointer" }}
          onClick={() => setOpenPopup(false)}
        />
      </Box>
      <Typography
        sx={{
          fontFamily: "FiraGO",
          fontWeight: 500,
          fontSize: "28px",
          textAlign: "center",
          color: "#212529",
          marginBlock: "20px 25px",
        }}
      >
        თანამშრომლის დამატება
      </Typography>
      <Box sx={{ height: "100%", width: "100%" }}>
        <form>
          <Box
            sx={{
              display: "flex",
              gap: "40px",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "280px" }}
            >
              <label
                style={{
                  fontFamily: "FiraGO",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#343A40",
                  marginBottom: "3px",
                }}
              >
                სახელი*
              </label>
              <input
                type="text"
                style={{
                  outline: "none",
                  padding: "10px",
                  height: "42px",
                  borderRadius: "6px",
                  border: "1px solid #CED4DA",
                }}
              />
              <Box>
                <small
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    fontFamily: "FiraGO",
                    fontWeight: 350,
                    fontSize: "10px",
                    color: "#6C757D",
                  }}
                >
                  <span>
                    <KeyboardArrowDownIcon />
                  </span>
                  მინიმუმ 2 სიმბოლო
                </small>
                <small
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    fontFamily: "FiraGO",
                    fontWeight: 350,
                    fontSize: "10px",
                    color: "#6C757D",
                  }}
                >
                  <span>
                    <KeyboardArrowDownIcon />
                  </span>
                  მინიმუმ 255 სიმბოლო
                </small>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "280px" }}
            >
              <label
                style={{
                  marginBottom: "3px",
                  fontFamily: "FiraGO",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#343A40",
                }}
              >
                გვარი*
              </label>
              <input
                type="text"
                style={{
                  outline: "none",
                  padding: "10px",
                  height: "42px",
                  borderRadius: "6px",
                  border: "1px solid #CED4DA",
                }}
              />
              <Box>
                <small
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    fontFamily: "FiraGO",
                    fontWeight: 350,
                    fontSize: "10px",
                    color: "#6C757D",
                  }}
                >
                  <span>
                    <KeyboardArrowDownIcon />
                  </span>
                  მინიმუმ 2 სიმბოლო
                </small>
                <small
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    fontFamily: "FiraGO",
                    fontWeight: 350,
                    fontSize: "10px",
                    color: "#6C757D",
                  }}
                >
                  <span>
                    <KeyboardArrowDownIcon />
                  </span>
                  მინიმუმ 255 სიმბოლო
                </small>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "FiraGO",
                fontWeight: 500,
                fontSize: "14px",
                color: "#343A40",
                marginBlock: "30px 2px",
              }}
            >
              ავატარი*
            </Typography>
            <Box>
              <Box
                sx={{
                  border: "1px dashed #CED4DA",
                  borderRadius: "8px",
                  height: "120px",
                  display: "flex",
                  alignItems: " center",
                  justifyContent: "center",
                }}
              >
                {hasImage ? (
                  <Box
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Image
                      src="/images/yser2png.png"
                      alt="img"
                      width={88}
                      height={88}
                    />
                    <DeleteForeverIcon
                      onClick={deleteImage}
                      sx={{
                        padding: "5px",
                        border: "0.3px solid #6C757D",
                        borderRadius: "50%",
                        color: "#6C757D",
                        backgroundColor: "#FFF",
                        position: "absolute",
                        zIndex: 3,
                        cursor: "pointer",
                        bottom: 0,
                        right: 0,
                      }}
                    />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Box>
                      <AddPhotoAlternateIcon sx={{ color: "#343A40" }} />
                      <Typography
                        sx={{
                          fontFamily: "FiraGO",
                          fontWeight: 400,
                          fontSize: "14px",
                          color: "#0D0F10",
                        }}
                      >
                        ატვირთე ფოტო
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
            <Box sx={{ marginBlock: "20px 10px" }}>
              <Typography
                sx={{
                  marginBottom: "3px",
                  fontFamily: "FiraGO",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#343A40",
                }}
              >
                დეპარტამენტი*
              </Typography>
              <Box
                sx={{
                  border: "1px solid #CED4DA",
                  width: "300px",
                  height: "42px",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                }}
              >
                <KeyboardArrowDownIcon sx={{ color: "#343A40" }} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                justifyContent: "flex-end",
                marginTop: "20px",
              }}
            >
              <Button
                sx={{
                  width: "100px",
                  height: "40px",
                  border: "1px solid #8338EC",
                  borderRadius: "5px",
                  color: "#343A40",
                  fontFamily: "FiraGO",
                  fontWeight: 400,
                  fontSize: "16px",
                }}
                onClick={() => setOpenPopup(false)}
              >
                გაუქმება
              </Button>
              <Button
                sx={{
                  width: "263px",
                  height: "40px",
                  backgroundColor: "#8338EC",
                  color: "#FFFFFF",
                  fontFamily: "FiraGO",
                  fontWeight: 400,
                  fontSize: "16px",
                }}
              >
                დაამატე თანამშრომელი
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreatEmployee;
