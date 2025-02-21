import { ListItem, ListItemText } from "@mui/material";
const InstructionItem = ({ primary }) => (
  <ListItem>
    <ListItemText
      primary={primary}
      primaryTypographyProps={{
        fontSize: "1.2rem",
        fontWeight: "bold",
      }}
    />
  </ListItem>
);

export default InstructionItem;
