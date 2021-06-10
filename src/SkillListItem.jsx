import { ListItem, ListItemText, Typography } from "@material-ui/core";
import ListItemLogo from "./ListItemLogo";

const SkillListItem = ({ logo, logoAltText, title, body, ...rest }) => {
  return (
    <ListItem>
      <ListItemLogo logo={logo} alt={logoAltText} {...rest} />
      <ListItemText
        primary={<Typography variant="h5">{title}</Typography>}
        secondary={<Typography>{body}</Typography>}
      />
    </ListItem>
  );
};

export default SkillListItem;
