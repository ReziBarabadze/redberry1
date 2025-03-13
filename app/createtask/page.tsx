"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CreateNewTask = () => {
  return (
    <Box
      sx={{
        paddingTop: "100px",
        paddingInline: "120px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontFamily: "FiraGO",
          fontWeight: 600,
          fontSize: "34px",
          marginBlock: "40px 25px",
        }}
      >
        შექმენი ახალი დავალება
      </Typography>
      <Box
        sx={{
          backgroundColor: "#FBF9FFA6",
          height: "750px",
          width: "100%",
          marginBottom: "50px",
          borderRadius: "4px",
          border: "1px solid #DEE2E6",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <form
          style={{
            width: "100%",
            height: "674px",
            marginLeft: "55px",
            marginTop: "65px",
            display: " flex",
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ marginRight: "70px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "550px",
              }}
            >
              <label
                style={{
                  fontFamily: "FiraGO",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#343A40",
                  paddingBlock: "6px",
                }}
              >
                სათაური
                <span>*</span>
              </label>
              <input
                type="text"
                style={{
                  outline: "none",
                  width: "100%",
                  height: "45px",
                  paddingInline: "14px",
                  border: "1px solid #DEE2E6",
                  borderRadius: "5px",
                  marginBottom: "4px",
                }}
              />
              <small
                style={{
                  fontFamily: "FiraGO",
                  fontWeight: 350,
                  fontSize: "10px",
                  color: "#6C757D",
                }}
              >
                მინიმუმ 2 სიმბოლო <br />
                მაქსიმუმ 255 სიმბოლო
              </small>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "550px",
                marginBlock: "55px",
              }}
            >
              <label
                style={{
                  fontFamily: "FiraGO",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#343A40",
                  paddingBlock: "6px",
                }}
              >
                აღწერა
              </label>
              <textarea
                style={{
                  resize: "none",
                  outline: "none",
                  height: "133px",
                  padding: "4px",
                  borderRadius: "5px",
                  border: "1px solid #DEE2E6",
                  marginBottom: "4px",
                }}
              />
              <small
                style={{
                  fontFamily: "FiraGO",
                  fontWeight: 350,
                  fontSize: "10px",
                  color: "#6C757D",
                }}
              >
                მინიმუმ 2 სიმბოლო
                <br />
                მაქსიმუმ 255 სიმბოლო
              </small>
            </Box>
            <Box
              sx={{
                width: "550px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* SELECTORS */}
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontFamily: "FiraGO",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#343A40",
                    paddingBlock: "6px",
                  }}
                >
                  პრიორიტეტი<span>*</span>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "259px",
                    padding: "14px",
                    border: "1px solid #DEE2E6",
                    borderRadius: "5px",
                    backgroundColor: "#FFFFFF",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: " 6px" }}
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
                        fontWeight: 300,
                        fontSize: "14px",
                        color: "#0D0F10",
                      }}
                    >
                      საშუალო
                    </Typography>
                  </Box>
                  <KeyboardArrowDownIcon />
                </Box>
              </Box>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontFamily: "FiraGO",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#343A40",
                    paddingBlock: "6px",
                  }}
                >
                  სტატუსი<span>*</span>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "259px",
                    padding: "14px",
                    border: "1px solid #DEE2E6",
                    borderRadius: "5px",
                    backgroundColor: "#FFFFFF",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "FiraGO",
                      fontWeight: 300,
                      fontSize: "14px",
                      color: "#0D0F10",
                    }}
                  >
                    დასაწყები
                  </Typography>
                  <KeyboardArrowDownIcon />
                </Box>
              </Box>
            </Box>
          </Box>
          {/* RIGHT SIDE */}
          <Box sx={{}}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "550px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "FiraGO",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#343A40",
                  paddingBottom: "6px",
                }}
              >
                დეპარტამენტი
                <span>*</span>
              </Typography>
              <Box
                sx={{
                  width: "550px",
                  display: "flex",
                  border: "1px solid #DEE2E6",
                  borderRadius: "4px",
                  backgroundColor: "#FFFFFF",
                  height: "45px",
                  paddingInline: "14px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "FiraGO",
                    fontWeight: "300",
                    fontSize: "14px",
                    color: "#0D0F10",
                  }}
                >
                  დიზაინის დეპარტამენტი
                </Typography>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            <Box sx={{ marginBlock: "90px 173px" }}>
              <Typography
                sx={{
                  fontFamily: "FiraGO",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#ADB5BD",
                  paddingBottom: "6px",
                }}
              >
                პასუხისმგებელი თანამშრომელი
              </Typography>
              <Box
                sx={{
                  width: "550px",
                  border: "1px solid #DEE2E6",
                  borderRadius: "4px",
                  backgroundColor: "#FFFFFF",
                  height: "45px",
                  paddingRight: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                }}
              >
                <KeyboardArrowDownIcon sx={{ color: "#ADB5BD" }} />
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "FiraGO",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: " #343A40",
                  paddingBottom: "6px",
                }}
              >
                დედლაინი
              </Typography>
              <Box sx={{ width: "318px" }}>
                <input
                  type="date"
                  style={{
                    width: "318px",
                    height: "45px",
                    border: "1px solid #DEE2E6",
                    borderRadius: "5px",
                    paddingInline: "14px",
                    outline: "none",
                    textTransform: "uppercase",
                    fontFamily: "FiraGO",
                    fontWeight: 300,
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "-1.25%",
                    color: "#ADB5BD",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </form>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            sx={{
              fontFamily: "FiraGO",
              fontWeight: 400,
              fontSize: "18px",
              color: "#fff",
              backgroundColor: "#8338EC",
              // padding: "10px 20px",
              borderRadius: "5px",
              width: "208px",
              height: "42px",
              marginRight: "50px",
              marginBottom: "50px",
            }}
          >
            დავალების შექმნა
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateNewTask;
