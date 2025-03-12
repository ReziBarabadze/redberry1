import { Box, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const TaskPage = () => {
  return (
    <Box
      sx={{
        paddingTop: "100px",
        paddingInline: "120px",
        // backgroundColor: "grey",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* SELECTOR BOX */}
      <Box>
        <Typography
          sx={{
            fontFamily: "FiraGO",
            fontWeight: 600,
            fontSize: "34px",
            marginBlock: "40px 52px",
          }}
        >
          დავალებების გვერდი
        </Typography>
        <Box
          sx={{
            width: "688px",
            height: "44px",
            border: "1px solid #DEE2E6",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingInline: "18px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: "#0D0F10",
              fontWeight: 400,
              fontFamily: "FiraGO",
            }}
          >
            დეპარტამენტი <KeyboardArrowDownIcon />
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: "#0D0F10",
              fontWeight: 400,
              fontFamily: "FiraGO",
            }}
          >
            პრიორიტეტი <KeyboardArrowDownIcon />
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: "#0D0F10",
              fontWeight: 400,
              fontFamily: "FiraGO",
            }}
          >
            თანამშრომელი <KeyboardArrowDownIcon />
          </Typography>
        </Box>
      </Box>
      {/* CARDS BOX */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBlock: "80px 30px",
        }}
      >
        <Box>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "FiraGO",
              fontWeight: 500,
              fontSize: "20px",
              color: "#fff",
              cursor: "pointer",
              width: "300px",
              height: "54px",
              backgroundColor: " #F7BC30",
              borderRadius: "10px",
            }}
          >
            დასაწყები
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "FiraGO",
              fontWeight: 500,
              fontSize: "20px",
              color: "#fff",
              cursor: "pointer",
              width: "300px",
              height: "54px",
              backgroundColor: " #FB5607",
              borderRadius: "10px",
            }}
          >
            პროგრესში
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "FiraGO",
              fontWeight: 500,
              fontSize: "20px",
              color: "#fff",
              cursor: "pointer",
              width: "300px",
              height: "54px",
              backgroundColor: " #FF006E",
              borderRadius: "10px",
            }}
          >
            მზად ტესტირებისთვის
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "FiraGO",
              fontWeight: 500,
              fontSize: "20px",
              color: "#fff",
              cursor: "pointer",
              width: "300px",
              height: "54px",
              backgroundColor: " #3A86FF",
              borderRadius: "10px",
            }}
          >
            დასრულებული
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TaskPage;
