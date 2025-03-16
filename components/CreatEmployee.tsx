"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DepartmentsSelector from "./DepartmentsSelector";
import axios from "axios";

interface Props {
  setOpenPopup: (open: boolean) => void;
}

interface FormErrors {
  name?: string;
  lastname?: string;
  avatar?: string;
  department?: string;
}

const CreatEmployee = ({ setOpenPopup }: Props) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<number | null>(
    null
  );
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (name.length < 2) {
      newErrors.name = "მინიმუმ 2 სიმბოლო";
    }
    if (name.length > 255) {
      newErrors.name = "მაქსიმუმ 225 სიმბოლო";
    }
    if (lastname.length < 2) {
      newErrors.lastname = "მინიმუმ 2 სიმბოლო";
    }
    if (lastname.length > 255) {
      newErrors.lastname = "მაქსიმუმ 225 სიმბოლო";
    }
    if (!avatar) {
      newErrors.avatar = "ატვირთე ფოტო";
    }

    if (!selectedDepartment) {
      newErrors.department = "აირჩიეთ დეპარტამენტი";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("surname", lastname);
    if (selectedDepartment) {
      formData.append("department_id", selectedDepartment.toString());
    }
    if (avatar) {
      formData.append("avatar", avatar);
    }
    try {
      const response = await axios.post(
        "https://momentum.redberryinternship.ge/api/employees",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        }
      );

      if (response.status === 201) {
        setOpenPopup(false);
      }
    } catch (error) {
      console.error("Error", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          position: "relative",
        }}
      >
        {isDepartmentOpen && (
          <Box
            sx={{
              position: "absolute",
              left: "655px",
              top: "52px",
            }}
          >
            <DepartmentsSelector
              setSelectedDepartment={setSelectedDepartment}
              setIsDepartmentOpen={setIsDepartmentOpen}
            />
          </Box>
        )}
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
        <form onSubmit={handleSubmit}>
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
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                style={{
                  outline: "none",
                  padding: "10px",
                  height: "42px",
                  borderRadius: "6px",
                  border: errors.name ? "1px solid red " : "1px solid #CED4DA",
                }}
              />
              {errors.name && (
                <Typography sx={{ color: "error", fontSize: "12px" }}>
                  {errors.name}
                </Typography>
              )}
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
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                style={{
                  outline: "none",
                  padding: "10px",
                  height: "42px",
                  borderRadius: "6px",
                  border: errors.lastname
                    ? "1px solid red"
                    : "1px solid #CED4DA",
                }}
              />
              {errors.lastname && (
                <Typography sx={{ color: "error", fontSize: "12px" }}>
                  {errors.lastname}
                </Typography>
              )}
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
                  border: errors.avatar
                    ? "1px dashed red"
                    : "1px dashed #CED4DA",
                  borderRadius: "8px",
                  height: "120px",
                  display: "flex",
                  alignItems: " center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                  id="avatar-upload"
                />
                <label htmlFor="avatar-upload">
                  {avatarPreview ? (
                    <Box
                      sx={{
                        position: "relative",
                      }}
                    >
                      <Image
                        src={avatarPreview}
                        alt="preview"
                        width={88}
                        height={88}
                        style={{ borderRadius: "50%", objectFit: "cover" }}
                      />
                      <DeleteForeverIcon
                        onClick={() => {
                          setAvatar(null);
                          setAvatarPreview("");
                        }}
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
                </label>
              </Box>
              {errors.avatar && (
                <Typography sx={{ color: "error.main", fontSize: "12px" }}>
                  {errors.avatar}
                </Typography>
              )}
              <Box>
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
                      border: errors.department
                        ? "1px solid red"
                        : "1px solid #CED4DA",
                      width: "300px",
                      height: "42px",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      cursor: "pointer",
                    }}
                    onClick={() => setIsDepartmentOpen(!isDepartmentOpen)}
                  >
                    <KeyboardArrowDownIcon
                      sx={{
                        color: "#343A40",
                        transform: isDepartmentOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "0.3s",
                      }}
                    />
                  </Box>
                  {errors.department && (
                    <Typography sx={{ color: "error.main", fontSize: " 12px" }}>
                      {errors.department}
                    </Typography>
                  )}
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
                    disabled={isSubmitting}
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
                    type="submit"
                    disabled={isSubmitting}
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
                    {isSubmitting ? "იგზავნება..." : "დაამატე თანამშრომელი"}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreatEmployee;
