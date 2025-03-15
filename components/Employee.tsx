"use client";
import { CheckBox } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Employee {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  department: {
    id: number;
    name: string;
  };
}

const Employee = () => {
  const [employee, setEmployee] = useState<Employee[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "https://momentum.redberryinternship.ge/api/employees",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            },
          }
        );
        setEmployee(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchEmployees();
  }, []);
  if (!mounted) return null;

  return (
    <Box
      sx={{
        width: "688px",
        minHeight: "220px",
        position: "absolute",
        top: "100%",
        right: "0.25px",
        zIndex: 30,
        marginTop: "7px",
        border: "0.5px solid #8338EC",
        borderRadius: "10px",
        paddingLeft: "20px",
        paddingTop: "20px",
        backgroundColor: "#ffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          width: "150px",
        }}
      >
        {employee.map((item) => (
          <Box key={item.id}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                width: "300px",
                cursor: "pointer",
              }}
            >
              <CheckBox />
              <Image
                src={item.avatar}
                alt="img"
                width={35}
                height={35}
                style={{
                  borderRadius: "50%",
                  marginBottom: "15px",
                  objectFit: "cover",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "FiraGO",
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#212529",
                  marginBottom: "15px",
                }}
              >{`${item.name} ${item.surname}`}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end ",
          paddingRight: "20px",
          paddingBottom: "20px",
        }}
      >
        <Button
          sx={{
            fontFamily: "FiraGO",
            fontWeight: 400,
            fontSize: "16px",
            color: "#FFFFFF",
            backgroundColor: "#8338EC",
            width: "155px",
            height: "35px",
            borderRadius: "20px",
          }}
        >
          არჩევა
        </Button>
      </Box>
    </Box>
  );
};

export default Employee;
