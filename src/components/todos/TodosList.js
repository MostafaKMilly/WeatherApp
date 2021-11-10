import { Archive, Check, Delete, Edit } from "@mui/icons-material";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function TodosList(props) {
  return (
    <Box mt={2}>
      <List>
        <ListItem
          alignItems="flex-start"
          component={Paper}
          elevation={1}
          variant="outlined"
          secondaryAction={
            <Box
              display="flex"
              sx={{
                flexDirection: {
                  md: "row",
                  xs: "column",
                },
              }}
              gap={1}
            >
              <IconButton edge="end" aria-label="comments">
                <Edit color="info" />
              </IconButton>
              <IconButton edge="end" aria-label="comments">
                <Delete color="error" />
              </IconButton>
              <IconButton edge="end" aria-label="comments">
                <Archive color="success" />
              </IconButton>
            </Box>
          }
          sx={{ mb: 2 }}
        >
          <ListItemText
            primary="Title"
            secondary={
              <>
                <Typography variant="body2" color="text.primary">
                  lorem lorem lorem lorem lorem
                </Typography>
                <Box display="flex" gap={1} alignItems="center" mt={1}>
                  <Typography variant="body2" color="text.primary">
                    status : checked
                  </Typography>
                  <Check color="text.primary" />
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight={600}
                  sx={{ mt: 1 }}
                >
                  Finshed At : 2021-1-2
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight={600}
                  sx={{ mt: 1 }}
                >
                  Created At : 2021-1-2
                </Typography>
              </>
            }
          />
        </ListItem>
        <ListItem
          alignItems="flex-start"
          component={Paper}
          elevation={1}
          variant="outlined"
          secondaryAction={
            <Box
              display="flex"
              sx={{
                flexDirection: {
                  md: "row",
                  xs: "column",
                },
              }}
              gap={1}
            >
              <IconButton edge="end" aria-label="comments">
                <Edit color="info" />
              </IconButton>
              <IconButton edge="end" aria-label="comments">
                <Delete color="error" />
              </IconButton>
              <IconButton edge="end" aria-label="comments">
                <Archive color="success" />
              </IconButton>
            </Box>
          }
          sx={{ mb: 2 }}
        >
          <ListItemText
            primary="Title"
            secondary={
              <>
                <Typography variant="body2" color="text.primary">
                  lorem lorem lorem lorem lorem
                </Typography>
                <Box display="flex" gap={1} alignItems="center" mt={1}>
                  <Typography variant="body2" color="text.primary">
                    status : checked
                  </Typography>
                  <Check color="text.primary" />
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight={600}
                  sx={{ mt: 1 }}
                >
                  Finshed At : 2021-1-2
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight={600}
                  sx={{ mt: 1 }}
                >
                  Created At : 2021-1-2
                </Typography>
              </>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default TodosList;
