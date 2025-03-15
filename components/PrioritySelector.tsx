import { Box, Button, Checkbox, FormControlLabel } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Department {
  id: number;
  name: string;
  icon: string;
}

const PriritySelector = () => {
  const [priority, setPriority] = useState<Department[]>([]);
  const [selectedPriority, setSelectedPriority] = useState<number[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "https://momentum.redberryinternship.ge/api/priorities"
        );
        setPriority(response.data);
      } catch (error) {
        console.error("Error fetching departments", error);
      }
    };
    fetchDepartments();
  }, []);

  const priorityChange = (departmentId: number) => {
    setSelectedPriority((prev) =>
      prev.includes(departmentId)
        ? prev.filter((id) => id !== departmentId)
        : [...prev, departmentId]
    );
  };

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
        {priority.map((prio) => (
          <FormControlLabel
            key={prio.id}
            control={
              <Checkbox
                checked={selectedPriority.includes(prio.id)}
                onChange={() => priorityChange(prio.id)}
              />
            }
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Image src={prio.icon} alt={prio.name} width={16} height={18} />
                {prio.name}
              </Box>
            }
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

export default PriritySelector;
