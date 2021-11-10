import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Icon,
  IconButton,
} from "@mui/material";
import { styled, Box } from "@mui/system";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

function DialogLayout(props) {
  const dispatch = useDispatch();

  const handleClose = () => {
    props.setOpen(false);
  };

  const onSubmit = (data) => {
    for (let i in data) {
      if (data[i] === undefined) {
        delete data[i];
      }
    }
    dispatch(props.handleActitvty({ ...data, id: props.todoId }));
    handleClose();
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        scroll="paper"
        sx={{
          top: {
            xs: 0,
            md: "-18%",
          },
          "& .MuiPaper-root": {
            width: "100%",
          },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {props.activityName}
        </BootstrapDialogTitle>
        <Box component="form" onSubmit={props.handleSubmit(onSubmit)}>
          <DialogContent dividers>
            <Box textAlign="center" mb={1} mt={2}>
              <Icon color="primary" sx={{ fontSize: "80px" }}>
                {props.iconName}
              </Icon>
            </Box>
            <Box p={3}>{props.children}</Box>
          </DialogContent>
          <DialogActions>
            <Button autoFocus type="submit">
              Save
            </Button>
          </DialogActions>
        </Box>
      </BootstrapDialog>
    </div>
  );
}

export default DialogLayout;
