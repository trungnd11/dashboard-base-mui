import { useState } from "react";
import { Settings, Logout, MenuSharp } from "@mui/icons-material";
import { Avatar, MenuItem, Menu, Divider, ListItemIcon, IconButton } from "@mui/material";
import { PaperProps, StyleHeader } from "./headerStyles";
import { useAppDispatch, useAppSelector } from "src/store/reduxHook";
import { getAuthorStore, logout } from "src/store/author/author";
import { Box } from "@mui/system";
import Space from "src/components/space/Space";
import { Color } from "src/components/variable";
import { toggleSider } from "src/store/siderBar/siderBar";

export default function AppHearder() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { username } = useAppSelector(getAuthorStore);
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleSiderBar = () => {
    dispatch(toggleSider());
  };

  return (
    <>
      <StyleHeader>
        <IconButton onClick={toggleSiderBar}>
          <MenuSharp />
        </IconButton>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Space>
            <Box component="span" color={Color.white}>
              {username}
            </Box>
            <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
          </Space>
        </IconButton>
      </StyleHeader>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={PaperProps}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
