import { type RouterModel } from "../../../model/RouterModel";

export const handleDataTab: any = (routers: RouterModel[]) => {
  const findRouter = routers.find((item) => item.name === "Tra cứu đối soát");
  if (findRouter) {
    return findRouter?.children?.map((i, index) => ({ ...i, id: index }));
  } else {
    for (const route of routers) {
      if (route?.children) {
        return handleDataTab(route.children);
      }
      continue;
    }
  }
};
