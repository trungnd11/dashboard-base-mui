import { Box, Breadcrumbs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { isEmptyArray } from "src/helpper/functionCommon";
import { type RouterModel } from "src/model/RouterModel";
import routers from "src/routers/routers";
import { StyleBreadscrumb } from "./breadscrumStyle";

export default function AppBreadscrumb() {
  const { pathname } = useLocation();
  const [breadscumbNameSider, setBreadscumbNameSider] = useState<RouterModel[]>();

  const getBreadscumbs = (routes: RouterModel[], preName?: RouterModel[]) => {
    for (let i = 0; i < routes.length; i++) {
      const breadcumb = routes[i];
      if (breadcumb?.path === pathname) {
        if (preName) {
          setBreadscumbNameSider(() => [...preName, breadcumb]);
          return;
        } else {
          setBreadscumbNameSider(() => [breadcumb]);
          return;
        }
      } else if (breadcumb.path === "/home") {
        continue;
      } else if (breadcumb.children) {
        preName
          ? getBreadscumbs(breadcumb.children, [...preName, breadcumb])
          : getBreadscumbs(breadcumb.children, [breadcumb]);
      }
      continue;
    }
  };

  useEffect(() => {
    getBreadscumbs(routers);
  }, [pathname]);

  return (
    <StyleBreadscrumb>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {
          !isEmptyArray(breadscumbNameSider) && breadscumbNameSider?.map(item => (
            <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }} key={item.id}>
              {
                item.icon && (
                  <Box component={item.icon} color="inherit" sx={{ mr: 1 }} />
                )
              }
              <Typography color="textPrimary">{item.name}</Typography>
            </Box>
          ))
        }
      </Breadcrumbs>
    </StyleBreadscrumb>
  );
};
