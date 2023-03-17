import { Box, Divider, Typography } from "@mui/material"
import { TreeItem, TreeView } from '@mui/lab';
import { ExpandMore, ChevronRight } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { StyleLink, StyleSideBar } from "./sideBarStyles";
import routers from "../../routers/routers";
import { RouterModel } from "../../model/RouterModel";

export default function AppSideBar() {
  const navigator = useNavigate();

  const renderTree = (nodes: RouterModel[] | RouterModel) => {
    return Array.isArray(nodes) ? nodes.map(item => {
      return (
        <TreeItem onClick={() => item.path && navigator(item.path)}
          key={item.id} nodeId={item.id}
          label={item?.path ? <StyleLink
            to={item.path}>{item.name}</StyleLink> : item.name} >
          {Array.isArray(item?.children)
            ? item.children.map((node) => renderTree(node))
            : null}
        </TreeItem>
      )
    }) : (
        <TreeItem onClick={() => nodes.path && navigator(nodes.path)}
          key={nodes.id}
          nodeId={nodes.id}
          label={nodes?.path ? <StyleLink
            to={nodes.path}>{nodes.name}</StyleLink> : nodes.name} >
        {Array.isArray(nodes?.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
      </TreeItem>
    )
  };

  return (
    <StyleSideBar>
      <Box className="avatar">
        <Typography variant="h5">
          Dashboard
        </Typography>
      </Box>
      <Divider />
      <TreeView
        className="tree-menu"
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMore />}
        defaultExpandIcon={<ChevronRight />}
      >
        {renderTree(routers)}
      </TreeView>
    </StyleSideBar>
  )
}

