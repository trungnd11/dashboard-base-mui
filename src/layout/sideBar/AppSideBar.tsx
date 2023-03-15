import { Avatar, Box, Divider, Typography } from "@mui/material"
import { TreeItem, TreeView } from '@mui/lab';
import { ExpandMore, ChevronRight } from '@mui/icons-material';
import { StyleSideBar } from "./sideBarStyles";

interface RenderTree {
  id: string;
  name: string;
  children?: readonly RenderTree[];
}

export default function AppSideBar() {
  const data: RenderTree[] = [
    {
      id: 'root-1',
      name: 'Parent-1',
      children: [
        {
          id: '1',
          name: 'Child - 1',
        },
        {
          id: '3',
          name: 'Child - 3',
          children: [
            {
              id: '4',
              name: 'Child - 4',
            },
          ],
        },
      ],
    },
    {
      id: 'root-2',
      name: 'Parent-2',
      children: [
        {
          id: '5',
          name: 'Child - 2',
        },
        {
          id: '6',
          name: 'Child - 2',
          children: [
            {
              id: '7',
              name: 'Child - 4',
            },
          ],
        },
      ],
    }
  ];

  const renderTree = (nodes: RenderTree[] | RenderTree) => Array.isArray(nodes) ? nodes.map(item => (
    <TreeItem key={item.id} nodeId={item.id} label={item.name}>
      {Array.isArray(item?.children)
        ? item.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  )) : (
      <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
        {Array.isArray(nodes?.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
      </TreeItem>
  );

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
        {renderTree(data)}
      </TreeView>
    </StyleSideBar>
  )
}

