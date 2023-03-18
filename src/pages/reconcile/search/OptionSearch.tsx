import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { handleDataTab } from "./handleOptionSearch";
import routers from "../../../routers/routers";
import { type RouteModel } from "../../../model/RouterModel";
import Closed from "./closed/Closed";
import Canceled from "./canceled/Canceled";
import Pending from "./pending/Pending";

interface TabPanelProps {
  children?: React.ReactNode
  index: number | string
  value: number | string
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: string) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function OptionSearch() {
  const [value, setValue] = useState<number>(0);
  const navigator = useNavigate();
  const { pathname } = useLocation();

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
    navigator(event.target.id);
  };

  useEffect(() => {
    setValue(() => handleDataTab(routers)?.find((item: RouteModel) => item.path === pathname)?.id);
  }, [pathname]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {
            handleDataTab(routers)?.map((item: RouteModel) => item?.path && (
              <Tab key={item.id} label={item.name} {...a11yProps(item.id)} id={item.path} />
            ))
          }
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Pending />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Closed />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Canceled />
      </TabPanel>
    </Box>
  );
}
