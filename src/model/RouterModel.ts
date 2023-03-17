export interface RouterModel {
  id: string,
  name: string,
  icon?: string,
  path?: string,
  component?: JSX.Element | React.LazyExoticComponent<() => JSX.Element>,
  children?: readonly RouterModel[]
};

export interface RouteModel {
  [x: string]: any
  id: string,
  path?: string,
  component?: JSX.Element | any,
  name: string
}