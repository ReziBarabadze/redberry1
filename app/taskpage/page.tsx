"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";
import Card from "@/components/Card";
import DepartmentsSelector from "@/components/DepartmentsSelector";
import PriritySelector from "@/components/PrioritySelector";

interface Status {
  id: number;
  name: string;
}

const TaskPage = () => {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [departamentOpen, setDepartamentOpen] = useState(false);
  const [prioritySelector, setPrioritySelector] = useState(false);
  // const [employee, setEmployee] = useState(false);

  const departmentClick = () => {
    setDepartamentOpen(!departamentOpen);
    setPrioritySelector(false);
  };

  const priorityClick = () => {
    setPrioritySelector(!prioritySelector);
    setDepartamentOpen(false);
  };

  // const employeeClick = () => {
  //   setDepartamentOpen(!employee);
  //   setPrioritySelector(false);
  // };

  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const response = await axios.get(
          "https://momentum.redberryinternship.ge/api/statuses"
        );
        setStatuses(response.data);
      } catch (error) {
        console.error("Error fetching statuses", error);
      }
    };
    fetchStatuses();
  }, []);

  const getStatusColor = (statusName: string): string => {
    switch (statusName) {
      case "დასაწყები":
        return "#f7bc30";
      case "პროგრესში":
        return "#fb5607";
      case "მზად ტესტირებისთვის":
        return "#ff006e";
      case "დასრულებული":
        return "#3a86ff";
      default:
        return "#gray";
    }
  };
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
            position: "relative",
          }}
        >
          <Typography
            onClick={departmentClick}
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
          {departamentOpen && <DepartmentsSelector />}
          <Typography
            onClick={priorityClick}
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
          {prioritySelector && <PriritySelector />}
          <Typography
            // onClick={employee}
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
          {/* {employee && <EmployeeSelector />} */}
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
        {statuses.map((status) => (
          <Box key={status.id}>
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
                backgroundColor: getStatusColor(status.name),
                borderRadius: "10px",
              }}
            >
              {status.name}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box>
        <Card />
      </Box>
    </Box>
  );
};

export default TaskPage;
