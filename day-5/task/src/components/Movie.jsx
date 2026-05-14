import useFetch from "../../../customHooks/useFetch";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Grid,
  ThemeProvider,
  Tooltip,
  createTheme,
  styled,
} from "@mui/material";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Movie = ({ value }) => {
  const Url = `https://mimic-server-api.vercel.app/movies?_limit=50&q=${value}`;
  const method = "get";
  let { movie, isloading, error, setMovie } = useFetch({ method, Url, value });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#ff5252",
      },
    },
  });

  const StyledAvatar = styled(Card)`
    ${({ theme }) => `
  cursor: pointer;
  transition: ${theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
 
    transform: scale(1.1);
  }
  `}
  `;

  const handleDelete = (id) => {
    axios
      .delete(`https://mimic-server-api.vercel.app/movies/${id}`)
      .then(() => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          console.log(result);

          if (result.isConfirmed) {
            Swal.fire(
              {
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              },
              setMovie((prev) => prev.filter((m) => m.id !== id)),
            );
          }
        });
      });
  };

  if (!isloading) {
    return (
      <ThemeProvider theme={darkTheme}>
        <div className="grid grid-cols-5  gap-4 max-w-7xl mx-auto space-x-3  space-y-5">
          {movie.length == 0 ? (
            <p className="col-span-5 rounded-md text-lg text-center font-semibold text-yellow-500">
              Not found...
            </p>
          ) : (
            movie.map((item, index) => (
              <StyledAvatar key={index} elevation={20}>
                <Card sx={{ maxWidth: 345 }} elevation={20}>
                  <CardMedia
                    component="img"
                    alt={movie.title}
                    sx={{ width: 500, height: 250 }}
                    image={
                      item.poster_path ||
                      "data:image/png;base64,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"
                    }
                  />
                  <CardContent>
                    <Tooltip
                      title={item.title}
                      placement="top"
                      color="secondary"
                    >
                      <Typography
                        className="truncate"
                        gutterBottom
                        variant="h7"
                        component="div"
                        fontStyle={"oblique"}
                      >
                        {item.title}
                      </Typography>
                    </Tooltip>

                    <Grid
                      container
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      size="grow"
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {item.original_language + "mil"}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {index + 1}
                      </Typography>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      color="primary"
                      size="small"
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      sx={{ fontSize: "10px", fontWeight: "bold" }}
                    >
                      Delete
                    </Button>
                    <Button
                      color="success"
                      size="small"
                      sx={{ fontSize: "10px" }}
                    >
                      <Link to={`/Add/${item.id}`}>Edit</Link>
                    </Button>
                  </CardActions>
                </Card>
              </StyledAvatar>
            ))
          )}
          {error && (
            <p className="w-full px-10 bg-red-500 text-center text-lg font-semibold ">
              ERROR
            </p>
          )}
        </div>
      </ThemeProvider>
    );
  } else {
    return (
      <p className="text-center font-bold text-purple-600 text-2xl">
        Loading...
      </p>
    );
  }
};

export default Movie;
