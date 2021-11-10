import { Archive, FormatListBulleted, Unarchive } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderLeft: `2px solid ${theme.palette.primary.main}`,
}));

function TodosCategories(props) {
  return (
    <Box>
      <List>
        <ListItem dense>
          <CustomListItemButton>
            <ListItemIcon>
              <FormatListBulleted color="primary" />
            </ListItemIcon>
            <ListItemText>todos</ListItemText>
          </CustomListItemButton>
        </ListItem>
        <ListItem dense>
          <CustomListItemButton>
            <ListItemIcon>
              <Archive />
            </ListItemIcon>
            <ListItemText>Archived</ListItemText>
          </CustomListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default TodosCategories;
