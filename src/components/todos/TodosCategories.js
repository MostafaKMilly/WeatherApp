import { useTheme } from "@emotion/react";
import { Archive, FormatListBulleted } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideArchives, showArchives } from "../../redux/slices/globalSlice";

function TodosCategories(props) {
  const isShowArchives = useSelector((state) => state.global.showArchives);
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box>
      <List>
        <ListItem dense>
          <ListItemButton
            sx={{
              borderLeft: !isShowArchives
                ? `2px solid ${theme.palette.primary.main}`
                : "",
            }}
            onClick={() => dispatch(hideArchives())}
          >
            <ListItemIcon>
              <FormatListBulleted
                color={!isShowArchives ? "primary" : "inherit"}
              />
            </ListItemIcon>
            <ListItemText>todos</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem dense>
          <ListItemButton
            sx={{
              borderLeft: isShowArchives
                ? `2px solid ${theme.palette.primary.main}`
                : "",
            }}
            onClick={() => dispatch(showArchives())}
          >
            <ListItemIcon>
              <Archive color={isShowArchives ? "primary" : "inherit"} />
            </ListItemIcon>
            <ListItemText>Archived</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default TodosCategories;
