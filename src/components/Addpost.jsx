import { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Container,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  Slide,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  tooltip: {
    position: "fixed !important",
    bottom: 20,
    right: 20,
    zIndex: 100,
  },
  modal: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff !important",
    padding: theme.spacing(3),
  },
}));

function Addpost() {
  const c = useStyles();
  const [open, setOpen] = useState(false);
  const [visibleTo, setVisiibleTo] = useState("Public");
  const [postCreated, setPostCreated] = useState(false);

  const handleClick = () => {
    setPostCreated(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setPostCreated(false);
  };

  return (
    <>
      <Tooltip
        title="Add Post"
        className={c.tooltip}
        onClick={() => setOpen(true)}
      >
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open} className={c.modal}>
        <Container
          className={c.container}
          sx={{
            width: { xs: "100vw", sm: "500px" },
            height: { xs: "100vh", sm: "auto" },
          }}
        >
          <TextField
            fullWidth
            id="standard-search"
            label="Title"
            type="text"
            variant="standard"
            sx={{ marginBottom: "25px" }}
          />

          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="What is on your mind?"
            multiline
            rows={5}
            sx={{ marginBottom: "25px" }}
          />

          <FormControl sx={{ marginBottom: "25px", display: "block" }}>
            <InputLabel id="demo-simple-select-disabled-label">
              Visibility
            </InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={visibleTo}
              label="Visibility"
              onChange={(e) => setVisiibleTo(e.target.value)}
            >
              <MenuItem value="Public">Public</MenuItem>
              <MenuItem value="My Friends">My Friends</MenuItem>
              <MenuItem value="Only Me">Only Me</MenuItem>
              <MenuItem value="Custom" disabled>
                Custom (Premium)
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ marginBottom: "25px" }}>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Who Can Comment?
            </FormLabel>

            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel
                value="Public"
                control={<Radio />}
                label="Public"
              />
              <FormControlLabel
                value="MyFriends"
                control={<Radio />}
                label="My Friends"
              />
              <FormControlLabel
                value="AnyBody"
                control={<Radio />}
                label="Anybody"
              />
              <FormControlLabel
                value="NoBody"
                control={<Radio />}
                label="Nobody"
              />
              <FormControlLabel
                value="Custom"
                control={<Radio />}
                label="Custom (Premium)"
                disabled
              />
            </RadioGroup>
          </FormControl>

          <div className={c.btns}>
            <Button sx={{ mr: 3 }} variant="outlined" onClick={handleClick}>
              Create
            </Button>
            <Button
              color="error"
              variant="outlined"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </Container>
      </Modal>
      <Snackbar
        open={postCreated}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Post Created Successfully!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Addpost;
