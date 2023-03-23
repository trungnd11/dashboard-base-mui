import { Box } from "@mui/material";
import { useEffect } from "react";
import AppBreadscrumb from "src/components/breadscrumb/AppBreadscrumb";
import { useAppDispatch, useAppSelector } from "src/store/reduxHook";
import { getSiderBarStore, onCloseMenu } from "src/store/siderBar/siderBar";
import { getSitesMap } from "src/store/sitesMap/sitesMap";
import AppContent from "../content/AppContent";
import AppHearder from "../header/AppHearder";
import AppSideBar from "../sideBar/AppSideBar";
import { StyleAppContainer } from "./containerStyles";

export default function AppContainer() {
  const { toggle } = useAppSelector(getSiderBarStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSitesMap());
  }, []);

  return (
    <StyleAppContainer toggle={toggle}>
      <Box className="app-sider" boxShadow={2}>
        <AppSideBar />
      </Box>
      <Box component="main" className="app-main" onClick={() => toggle && dispatch(onCloseMenu())}>
        <Box component="header" className="app-header">
          <AppHearder />
          <AppBreadscrumb />
        </Box>
        <Box className="app-content">
          <AppContent />
        </Box>
      </Box>
    </StyleAppContainer>
  );
}
