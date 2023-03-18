import { type SvgIconProps, Box, Typography } from "@mui/material";

export const getLableItem = (LabelIcon?: React.ElementType<SvgIconProps>, labelText?: string, labelInfo?: string) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
      {
        LabelIcon && (
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
        )
      }
      <Typography variant="body2" sx={{ fontWeight: "inherit", flexGrow: 1 }}>
        {labelText}
      </Typography>
      {
        labelInfo && (
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        )
      }
    </Box>
  );
};
