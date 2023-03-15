import { Box } from "@mui/material";
import AppContent from "../content/AppContent";
import AppHearder from "../header/AppHearder";
import AppSideBar from "../sideBar/AppSideBar";
import { StyleAppContainer } from "./containerStyles";

export default function AppContainer() {

  return (
    <StyleAppContainer>
      <Box className="app-sider">
        <AppSideBar />
      </Box>
      <Box component="main" className="app-main">
        <Box component="header" className="app-header">
          <AppHearder />
        </Box>
        <Box className="app-content">
          <AppContent />
        </Box>
      </Box>
    </StyleAppContainer>
  )
}
