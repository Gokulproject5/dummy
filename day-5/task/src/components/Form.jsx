import { Grid, Paper, Typography, TextField, Button, Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const Form = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let isEditing = Boolean(id);
  let paperStyled = {
    width: "500px",
    padding: "10px",
  };
  let buttonStyled = {
    width: "100vw",
    margin: "10px",
  };

  let [newProduct, setNewProduct] = useState({
    title: "",
    poster_path: "",
    release_date: "",
    original_language: "",
  });
  console.log(newProduct);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = isEditing
      ? `https://mimic-server-api.vercel.app/movies/${id}`
      : "https://mimic-server-api.vercel.app/movies";

    fetch(url, {
      method: isEditing ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then(() => {
        (isEditing ? (Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
            navigate("/")
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        })) : (Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        })));
        ;
      })
      .catch((err) => alert("Submit error: " + err));
  };

  useEffect(() => {
    const getApi = async () => {
      const res = await axios.get(
        `https://mimic-server-api.vercel.app/movies/${id}`,
      );
      const { data } = res;
      setNewProduct(data);
    };
    getApi();
  }, [id]);
  return (
    <>
      <Box display="flex" justifyContent="center" style={{ minHeight: "10vh" }}>
        <Paper
          elevation={10}
          sx={{ justifyContent: "center" }}
          style={paperStyled}
        >
          <Typography variant="h5" align="center">
            Add Movies{" "}
          </Typography>
          <Grid container spacing={2} padding={1} component="form">
            <TextField
              size="small"
              id=""
              label="Movie Name"
              name="title"
              color="secondary"
              onChange={handleInput}
              value={newProduct.title}
            />
            <TextField
              id=""
              size="small"
              label="Image Url"
              value={newProduct.poster_path}
              name="poster_path"
              color="secondary"
              onChange={handleInput}
            />
            <Grid container spacing={2}>
              <TextField
                size="small"
                id=""
                label="Language"
                color="secondary"
                name="original_language"
                value={newProduct.original_language}
                onChange={handleInput}
              />
              <TextField
                size="small"
                id=""
                sx={{ width: "220px" }}
                name="release_date"
                type="date"
                color="secondary"
                value={newProduct.release_date}
                onChange={handleInput}
              />
            </Grid>
            <Button
              style={buttonStyled}
              onClick={handleSubmit}x
              color="secondary"
              variant="contained"
            >
              {isEditing?"Edit":"Add"}
            </Button>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default Form;
