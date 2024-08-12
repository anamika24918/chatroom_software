import { styled} from "@mui/material/styles";


const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  export default SearchIconWrapper;