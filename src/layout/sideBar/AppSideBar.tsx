import { Box, Divider, Typography } from "@mui/material";
import { TreeItem, TreeView } from "@mui/lab";
import { ExpandMore, ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { StyleSideBar } from "./sideBarStyles";
import routers from "../../routers/routers";
import { type RouterModel } from "../../model/RouterModel";
import { Color } from "../../components/variable";
import { getLableItem } from "./handleAppSideBar";

export default function AppSideBar() {
  const navigator = useNavigate();

  const renderTree = (nodes: RouterModel[] | RouterModel) => {
    return Array.isArray(nodes)
      ? nodes.map(item => {
        return (
        <TreeItem onClick={() => { item.path && navigator(item.path); }}
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
          onClick={() => { nodes.path && navigator(nodes.path); }}
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

  return (
    <StyleSideBar>
      <Box className="avatar">
        <Typography variant="h5" color={Color.white}>
          Dashboard
        </Typography>
      </Box>
      <Divider light />
      <TreeView
        className="tree-menu"
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMore />}
        defaultExpandIcon={<ChevronRight />}
      >
        {renderTree(routers)}
      </TreeView>
    </StyleSideBar>
  );
}
