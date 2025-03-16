"use client";
import { Box, Button, Checkbox, FormControlLabel } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface DepartmentsSelectorProps {
  setSelectedDepartment: (department: number | null) => void;
  setIsDepartmentOpen: (isOpen: boolean) => void;
}

interface Department {
  id: number;
  name: string;
}

const DepartmentsSelector = ({
  setSelectedDepartment,
  setIsDepartmentOpen,
}: DepartmentsSelectorProps) => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [selectedDepartments, setSelectedDepartments] = useState<number[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "https://momentum.redberryinternship.ge/api/departments"
        );
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments", error);
      }
    };
    fetchDepartments();
  }, []);

  const departmentChange = (departmentId: number) => {
    setSelectedDepartments((prev) =>
      prev.includes(departmentId)
        ? prev.filter((id) => id !== departmentId)
        : [...prev, departmentId]
    );
  };

  const handleSelection = () => {
    const selectedDepartment = selectedDepartments[0] || null;
    setSelectedDepartment(selectedDepartment);
    setIsDepartmentOpen(false);
  };

  return (
    <Box
      sx={{
        width: "688px",
        minHeight: "274px",
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
          width: "400px",
        }}
      >
        {departments.map((department) => (
          <FormControlLabel
            key={department.id}
            control={
              <Checkbox
                checked={selectedDepartments.includes(department.id)}
                onChange={() => departmentChange(department.id)}
              />
            }
            label={department.name}
            sx={{
              "& .MuiFormControlLabel-label": {
                fontFamily: "FiraGO",
                fontWeight: 400,
                fontSize: "16px",
                color: "#212529",
              },
            }}
          />
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
          onClick={handleSelection}
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

export default DepartmentsSelector;
