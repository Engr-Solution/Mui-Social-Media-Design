import { Container, List, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  Camera,
  Collections,
  FormatListBulleted,
  Home,
  Logout,
  People,
  PersonalVideo,
  PhoneAndroid,
  Settings,
  Store,
} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "#555",
    position: "sticky",
    top: 0,
    padding: `${theme.spacing(2)} !important`,
    paddingTop: `${theme.spacing(10)} !important`,
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
    },
  },
  items: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "flext-start",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(4),
    },
  },
  icon: {
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4em",
      fontWeight: 700,
      margin: "0 auto",
    },
  },
  text: {
    fontSize: "14px !important",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function Leftbar() {
  const c = useStyles();
  return (
    <Container className={c.container}>
      <ul className={c.items}>
        <li className={c.item}>
          <Home className={c.icon} />
          <Typography
            className={c.text}
            sx={{ marginLeft: "10px" }}
            variant="h6"
          >
            Home
          </Typography>
        </li>
        <li className={c.item}>
          <People className={c.icon} />
          <Typography
            className={c.text}
            sx={{ marginLeft: "10px" }}
            variant="h6"
          >
            Friends
          </Typography>
        </li>
        <li className={c.item}>
          {" "}
          <FormatListBulleted className={c.icon} />
          <Typography
            className={c.text}
            sx={{ marginLeft: "10px" }}
            variant="h6"
          >
            Lists
          </Typography>
        </li>
        <li className={c.item}>
          {" "}
          <Camera className={c.icon} />
          <Typography
            className={c.text}
            sx={{ marginLeft: "10px" }}
            variant="h6"
          >
            Camera
          </Typography>
        </li>
        <li className={c.item}>
          {" "}
          <PersonalVideo className={c.icon} />
          <Typography
            className={c.text}
            sx={{ marginLeft: "10px" }}
            variant="h6"
          >
            Videos
          </Typography>
        </li>
        <li className={c.item}>
          {" "}
          <PhoneAndroid className={c.icon} />
          <Typography
            className={c.text}
            sx={{ marginLeft: "10px" }}
            variant="h6"
          >
            App
          </Typography>
        </li>
        <li className={c.item}>
          {" "}
          <Collections className={c.icon} />
          <Typography
            className={c.text}
            sx={{ marginLeft: "10px" }}
            variant="h6"
          >
            Collections
          </Typography>
        </li>
        <li className={c.item}>
          {" "}
          <Store className={c.icon} />
          <Typography
            className={c.text}
            sx={{ marginLeft: "10px" }}
            variant="h6"
          >
            Market Place
          </Typography>
        </li>
        <li className={c.item}>
          {" "}
          <Settings className={c.icon} />
          <Typography
            className={c.text}
            sx={{ marginLeft: "10px" }}
            variant="h6"
          >
            Settings
          </Typography>
        </li>
        <li className={c.item}>
          {" "}
          <Logout className={c.icon} />
          <Typography
            className={c.text}
            sx={{ marginLeft: "10px" }}
            variant="h6"
          >
            Logout
          </Typography>
        </li>
      </ul>
    </Container>
  );
}

export default Leftbar;
