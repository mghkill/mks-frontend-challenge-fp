import * as React from "react";
import Drawer from "@mui/joy/Drawer";
import DialogTitle from "@mui/joy/DialogTitle";
import ModalClose from "@mui/joy/ModalClose";

import "./styleDrawer.css";
import { Grid } from "@mui/joy";

interface DrawerCloseButtonProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}

const DrawerCloseButton: React.FC<DrawerCloseButtonProps> = ({
  open,
  setOpen,
  children,
}) => {
  return (
    <Grid sx={{ display: "flex" }}>
      <Drawer
        id="drawerCart"
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <ModalClose />
        <DialogTitle>{children}</DialogTitle>
      </Drawer>
    </Grid>
  );
};

export default DrawerCloseButton;
