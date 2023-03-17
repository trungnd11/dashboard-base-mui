import loadable from "@loadable/component";

const Icon = (type: string) =>
  type && loadable(() => import(`@material-ui/icons/${type}.js`));
export default Icon;
