import { type SvgIconProps } from "@mui/material";
export interface RouterModel {
  id: string
  name: string
  icon?: React.ElementType<SvgIconProps>
  path?: string
  component?: JSX.Element | React.LazyExoticComponent<() => JSX.Element>
  children?: RouterModel[]
};

export interface RouteModel {
  [x: string]: any
  id: string
  path?: string
  component?: JSX.Element | any
  name: string
}
