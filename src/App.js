import "./App.css";
import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Feeds from "./components/Feeds";
import Addpost from "./components/Addpost";

const Theme = createTheme();
const useStyles = makeStyles((theme) => ({
  rightbar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function Component() {
  const c = useStyles();
  return (
    <Grid item xs={3} className={c.rightbar}>
      <Rightbar />
    </Grid>
  );
}

function App(props) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Navbar />
        <Grid container>
          <Grid px="2" item xs={2} sm={2}>
            <Leftbar />
          </Grid>
          <Grid px="2" item xs={10} sm={7}>
            <Feeds />
          </Grid>
          <Component></Component>
        </Grid>
        <Addpost />
      </ThemeProvider>
    </>
  );
}

export default App;
