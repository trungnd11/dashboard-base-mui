import { Key, useEffect, useState } from "react";
import { Box, Divider, IconButton, Tooltip, Typography, Zoom } from "@mui/material";
import { TreeItem, TreeView } from "@mui/lab";
import { ExpandMore, ChevronRight } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { StyleMenuSmall, StyleSideBar, StyleTreeviewSmall } from "./sideBarStyles";
import { type RouterModel } from "../../model/RouterModel";
import { Color } from "../../components/variable";
import { getLableItem } from "./handleAppSideBar";
import { useAppSelector } from "src/store/reduxHook";
import { getSiderBarStore } from "src/store/siderBar/siderBar";
import { convertSiteMap } from "src/helpper/siteMap";
import { getSitesMapStore } from "src/store/sitesMap/sitesMap";
import { isEmptyArray } from "src/helpper/functionCommon";

const LOGO_URL = "https://vetc.com.vn/images/logo_trang.svg";

export default function AppSideBar() {
  const ROOT_MENU = "1";
  const navigator = useNavigate();
  const [expanded, setExpanded] = useState<string[]>([ROOT_MENU]);
  const [selected, setSelected] = useState<string[]>([ROOT_MENU]);
  const [idMenu, setIdMenu] = useState("");
  const { pathname } = useLocation();
  const { toggle, closeMenu } = useAppSelector(getSiderBarStore);
  const { sitesMap } = useAppSelector(getSitesMapStore);

  const getExpand = (routes: RouterModel[], preName?: string[]) => {
    for (let i = 0; i < routes?.length; i++) {
      const item = routes[i];
      if (item.path === pathname) {
        if (preName) {
          setExpanded(() => [...preName, item.id]);
          setSelected(() => [item.id]);
          return;
        } else {
          setExpanded(() => [item.id]);
          setSelected(() => [item.id]);
          return;
        }
      } else if (item.children) {
        preName
          ? getExpand(item.children, [...preName, item.id])
          : getExpand(item.children, [item.id]);
      }
      continue;
    }
  };

  const navigatorPage = (path?: string) => {
    path && navigator(path);
    toggle && path && setIdMenu("");
  };

  const renderTree = (nodes: RouterModel[] | RouterModel) => {
    return Array.isArray(nodes)
      ? nodes.map(item => {
        return (
        <TreeItem onClick={() => navigatorPage(item.path)}
          key={item.id}
          nodeId={item.id}
          label={getLableItem(item.icon, item.name)}
        >
          {Array.isArray(item?.children)
            ? item.children.map((node) => renderTree(node))
            : null}
        </TreeItem>
        );
      })
      : (
        <TreeItem
          onClick={() => navigatorPage(nodes.path)}
          key={nodes.id}
          nodeId={nodes.id}
          label={getLableItem(nodes.icon, nodes.name)}
        >
        {Array.isArray(nodes?.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
      </TreeItem>
        );
  };

  const renderTitle = (item: RouterModel) => (
    <StyleTreeviewSmall
      className="tree-menu"
      aria-label="file system navigator"
      expanded={expanded}
      selected={selected}
      defaultCollapseIcon={<ExpandMore />}
      defaultExpandIcon={<ChevronRight />}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
    >
      {renderTree(item?.children ? item.children : item)}
    </StyleTreeviewSmall>
  );

  const handleTooltipOpen = (id: string) => {
    setIdMenu(id);
  };

  const handleToggle = (_e: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (_e: React.SyntheticEvent, nodeIds: string[]) => {
    setSelected(nodeIds);
  };

  useEffect(() => {
    !isEmptyArray(sitesMap) && getExpand(convertSiteMap(sitesMap));
  }, [pathname, sitesMap]);

  useEffect(() => {
    idMenu && setIdMenu("");
  }, [toggle, closeMenu]);

  return (
    <StyleSideBar toggle={toggle}>
      <Box className="avatar">
        <Typography variant={toggle ? "h4" : "h5"} color={Color.white} textAlign="center">
          {
            toggle ? <b>V</b> : <img src={LOGO_URL} />
          }
        </Typography>
      </Box>
      <Divider light />
      {
        toggle ? (
          convertSiteMap(sitesMap).map((item: RouterModel, index: Key | null | undefined) => (
            <StyleMenuSmall key={index} className="menu-item">
              <Tooltip
                arrow
                placement="right-start"
                TransitionComponent={Zoom}
                open={idMenu === item.id ? true : false}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={renderTitle(item)}>
                <IconButton onClick={() => handleTooltipOpen(item.id)}>
                  <Box component={item.icon} color="inherit" sx={{ mr: 1 }} />
                </IconButton>
              </Tooltip>
              </StyleMenuSmall>
          ))
        ) : (
            <TreeView
              className="tree-menu"
              aria-label="file system navigator"
              expanded={expanded}
              selected={selected}
              defaultCollapseIcon={<ExpandMore />}
              defaultExpandIcon={<ChevronRight />}
              onNodeToggle={handleToggle}
              onNodeSelect={handleSelect}
            >
              {renderTree(convertSiteMap(sitesMap))}
            </TreeView>
        )
      }
    </StyleSideBar>
  );
}
