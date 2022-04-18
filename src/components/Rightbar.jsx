import {
  AvatarGroup,
  Avatar,
  Container,
  Typography,
  Link,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Gallery from "./Gallery";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "sticky",
    top: 0,
    padding: `${theme.spacing(2)} !important`,
    paddingTop: `${theme.spacing(10)} !important`,
  },
  label: {
    display: "block",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#555 !important",
    fontSize: "1em !important",
    fontWeight: "500 !important",
    marginRight: "1em important",
  },
}));

function Rightbar() {
  const c = useStyles();
  return (
    <Container className={c.container}>
      <div>
        <Typography variant="h6" className={c.label} gutterBottom>
          Online Friends
        </Typography>
        <AvatarGroup
          max={3}
          total={10}
          sx={{ p: 0, justifyContent: "flex-end", mb: 3 }}
        >
          <Avatar
            alt="avatar"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="avatar"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="avatar"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="avatar"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
        </AvatarGroup>
      </div>

      <div className="gallery">
        <Typography variant="h6" className={c.label} gutterBottom>
          Gallery
        </Typography>
        <Gallery />
      </div>
      <div className="categories">
        <Typography variant="h6" className={c.label} gutterBottom>
          Categories
        </Typography>
        <Link variant="body2" underline="none" href="#" className={c.link}>
          Sport
        </Link>{" "}
        <Link variant="body2" underline="none" href="#" className={c.link}>
          Movies
        </Link>{" "}
        <Link variant="body2" underline="none" href="#" className={c.link}>
          Songs
        </Link>
        <Divider flexItem sx={{ my: 1 }} />
        <Link variant="body2" underline="none" href="#" className={c.link}>
          Education
        </Link>{" "}
        <Link variant="body2" underline="none" href="#" className={c.link}>
          News
        </Link>{" "}
        <Link variant="body2" underline="none" href="#" className={c.link}>
          Business
        </Link>{" "}
      </div>
    </Container>
  );
}

export default Rightbar;
