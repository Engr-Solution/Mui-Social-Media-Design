import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Cancel,
  MailOutline,
  Notifications,
  SearchOutlined,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import DP from "../img/avatar.jpg";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  highlight: {
    color: "red",
    fontWeight: "bold",
  },
  search: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: "5px",
    padding: theme.spacing(0.4),
    backgroundColor: "#f9f9f9",
    color: "#ccc",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },
  hide: {
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
  icons: {
    display: "flex",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "none" : "flex"),
    },
  },
  cancel: {
    backgroundColor: "white",
    color: "#cecece",
    borderRadius: "50%",
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
}));

function Navbar({ theme }) {
  const [open, setOpen] = useState(false);
  const c = useStyles({ open });
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={c.toolbar}>
          <Typography variant="h5">
            <span className={c.highlight}>Bi</span>
            Coder
          </Typography>
          <div className={c.search}>
            <SearchOutlined sx={{ marginRight: "10px" }} />
            <InputBase
              sx={{ color: "#090909", width: "100%" }}
              placeholder="Search..."
            ></InputBase>
            <Cancel className={c.cancel} onClick={() => setOpen(false)} />
          </div>
          <div className={c.icons}>
            <IconButton>
              <SearchOutlined
                sx={{ color: "white" }}
                className={c.hide}
                onClick={() => setOpen(true)}
              />
            </IconButton>
            <IconButton>
              <Badge badgeContent={0} color="error">
                <MailOutline sx={{ color: "white" }} />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={10} color="error">
                <Notifications sx={{ color: "white" }} />
              </Badge>
            </IconButton>
            <IconButton>
              <Avatar src={DP} alt="avatar"></Avatar>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
