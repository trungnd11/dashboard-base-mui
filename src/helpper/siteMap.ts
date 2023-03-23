import { isEmptyArray } from "./functionCommon";

export const convertPrivileges = (item: any) => item?.childrent ? item.childrent
  .map((item: any) => {
    return isEmptyArray(item.childrent) ? [{ path: item.strUrl, privilege: item.privileges }] : item.childrent.map((subItem: any) => ({
      path: subItem.strUrl,
      privilege: subItem.privileges,
    }));
  })
  .flat() : [];

export const convertSiteMap: any = (items: any[]) =>
  Array.isArray(items) ? items.map((item: any) =>
    item.childrent.length === 0 ? {
      id: item?.id,
      name: item?.strName,
      path: item?.strUrl,
      icon: item?.strIcon,
    } : {
      id: item?.id,
      name: item?.strName,
      path: item?.strUrl,
      icon: item?.strIcon,
      children: convertSiteMap(item.childrent),
    }
  ) : [];