"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DateRangeIcon from "@mui/icons-material/DateRange";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Reply from "@/components/Reply";

const TaskInside = () => {
  const [showReply, setShowReply] = useState(false);
  return (
    <Box
      sx={{
        height: "700px",
        paddingTop: "100px",
        paddingInline: "120px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* LEFT */}
      <Box
        sx={{
          marginTop: "40px",
          width: "625px",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "212px",
            display: "flex",
            justifyContent: "space-between",
            marginBlock: "10px 12px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              width: "100px",
              height: "30px",
              border: "0.5px solid #FFBE0B",
              borderRadius: "3px",
            }}
          >
            <Image src="images/-- icon.svg" alt="icon" width={18} height={20} />
            <Typography
              sx={{
                fontFamily: "FiraGO",
                fontWeight: 500,
                fontSize: "15px",
                color: "#FFBE0B",
              }}
            >
              საშუალო
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "FiraGO",
                fontWeight: 400,
                fontSize: "16px",
                color: "#FFFFFF",
                backgroundColor: "#FF66A8",
                width: "88px",
                height: "29px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "15px",
              }}
            >
              დიზაინი
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "30px",
              color: "#212529",
            }}
          >
            Redberry-ს საიტის ლენდინგის დიზაინი
          </Typography>
          <Typography
            sx={{
              marginBlock: "26px 63px",
              fontFamily: "FiraGO",
              fontWeight: 400,
              fontSize: "18px",
              color: "#000000",
            }}
          >
            მიზანია რომ შეიქმნას თანამედროვე, სუფთა და ფუნქციონალური დიზაინი,
            რომელიც უზრუნველყოფს მარტივ ნავიგაციას და მკაფიო ინფორმაციის
            გადაცემას. დიზაინი უნდა იყოს ადაპტირებადი (responsive), გამორჩეული
            ვიზუალით, მინიმალისტური სტილით და ნათელი ტიპოგრაფიით.
          </Typography>
        </Box>
        <Box sx={{ width: "500px", height: " 100%" }}>
          <Typography
            sx={{
              marginBottom: "28px",
              fontFamily: "FiraGO",
              fontWeight: 600,
              fontSize: "20px",
            }}
          >
            დავალების დეტალები
          </Typography>
          <Box sx={{ display: "flex", gap: "70px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ marginTop: "23px" }}>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "FiraGO",
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                >
                  <ScheduleIcon />
                  სტატუსი
                </Typography>
              </Box>
              <Box sx={{ marginBlock: "40px" }}>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "FiraGO",
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                >
                  <PermIdentityIcon />
                  თანამშრომელი
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "FiraGO",
                    fontWeight: 400,
                    fontSize: "16px",
                  }}
                >
                  <DateRangeIcon />
                  დავალების ვადა
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  width: "259px",
                  border: "1px solid #CED4DA",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px",
                    fontFamily: "FiraGO",
                    fontWeight: 300,
                    fontSize: "14px",
                  }}
                >
                  მზად ტესტირებისთვის <KeyboardArrowDownIcon />
                </Typography>
              </Box>
              <Box sx={{ width: "180px", marginBlock: "30px 20px" }}>
                <Typography
                  sx={{
                    fontFamily: "FiraGO",
                    fontWeight: 300,
                    fontSize: "11px",
                    color: "#474747",
                    textAlign: "end",
                  }}
                >
                  დიზაინის დეპარტამენტი
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <Image
                    src="/images/user.png"
                    alt="image"
                    width={32}
                    height={32}
                  />
                  <Typography
                    sx={{
                      fontFamily: "FiraGO",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#0D0F10",
                    }}
                  >
                    ელაია ბაგრატიონი
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#0D0F10",
                    fontFamily: "FiraGO",
                    fontWeight: 400,
                    fontSize: "14px",
                  }}
                >
                  ორშ - 02/2/2025
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* RIGHT */}
      <Box
        sx={{
          marginTop: "100px",
          width: "600px",
          height: "100%",
          padding: "25px",
          backgroundColor: "#F8F3FEA6",
          border: "0.3px solid #DDD2FF",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ position: "relative", marginBottom: "66px" }}>
          <textarea
            placeholder="დაწერე კომენტარი"
            style={{
              resize: "none",
              width: "100%",
              height: "135px",
              border: "0.3px solid #DDD2FF",
              borderRadius: "10px",
              padding: "18px",
              outline: "none",
            }}
          ></textarea>
          <Button
            sx={{
              position: "absolute",
              right: 10,
              bottom: 15,
              height: "35px",
              width: "155px",
              padding: "20px",
              backgroundColor: "#8338EC",
              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "FiraGO",
                fontSize: "16px",
                fontWeight: 400,
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
              }}
            >
              დააკომენტარე
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            marginBottom: "40px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "FiraGO",
              fontWeight: 500,
              fontSize: "20px",
              color: "#00000",
            }}
          >
            კომენტარები
          </Typography>
          <Typography
            sx={{
              backgroundColor: "#8338EC",
              color: "#ffff",
              width: "30px",
              ontFamily: "FiraGO",
              fontWeight: 500,
              fontSize: "14px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            3
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "120px",
            display: "flex",
            gap: "12px",
          }}
        >
          <Image src="/images/user2.png" alt="img" width={38} height={38} />
          <Box>
            <Typography
              sx={{
                fontFamily: "FiraGO",
                fontWeight: 500,
                fontSize: "18px",
                color: "#212529",
              }}
            >
              ემილია მორგანი
            </Typography>
            <Typography
              sx={{
                marginBlock: "8px 10px",
                fontFamily: "FiraGO",
                fontWeight: 350,
                fontSize: "16px",
                color: "#343A40",
              }}
            >
              დიზაინი სუფთად ჩანს, მაგრამ კოდირებისას მნიშვნელოვანი იქნება, რომ
              ელემენტებს ჰქონდეს შესაბამისი რეზოლუცია.
            </Typography>

            <Image
              src="/images/reply.png"
              alt="icon"
              width={67}
              height={26}
              style={{ cursor: "pointer" }}
              onClick={() => setShowReply(!showReply)}
            />
          </Box>
        </Box>
        {showReply && <Reply />}
      </Box>
    </Box>
  );
};

export default TaskInside;
