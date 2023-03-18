import { type RouterModel } from "../../model/RouterModel";

export const handleRouterContent: any = (routers: RouterModel[]) =>
  routers.map((route: RouterModel) => route.children
    ? handleRouterContent(route.children)
    : {
        id: route.id,
        path: route.path,
        component: route?.component
      }
  ).flat();
