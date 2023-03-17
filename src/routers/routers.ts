import { lazy } from "react";
import { LoopSharp, AccessTime, SystemUpdate, Search } from '@mui/icons-material';
import { RouterModel } from "../model/RouterModel";
import { generateId } from "../ulti/genertateIdUlti";

const OptionSearch = lazy(() => import("../pages/reconcile/search/OptionSearch"));

const routers: RouterModel[] = [
  {
    id: generateId(),
    name: "Đối soát",
    icon: LoopSharp,
    children: [
      {
        id: generateId(),
        name: "Tra cứu đối soát",
        icon: Search,
        children: [
          {
            id: generateId(),
            name: "Đang xử lý",
            path: "/reconcicle/search/pending",
            component: OptionSearch
          },
          {
            id: generateId(),
            name: "Đã đóng",
            path: "/reconcicle/search/closed",
            component: OptionSearch
          }, {
            id: generateId(),
            name: "Đã hủy",
            path: "/reconcicle/search/canceled",
            component: OptionSearch
          }
        ]
      },
      {
        id: generateId(),
        name: "Bằng chứng ĐS",
        path: "/reconcicle/counter-evidence"
      },
      {
        id: generateId(),
        name: "Kết quả đối soát cuối cùng",
        path: "/sreconcicle/final-resutl"
      }
    ],
  },
  {
    id: generateId(),
    name: "Vận hành",
    icon: AccessTime,
    children: [
      {
        id: generateId(),
        name: "Tra cứu giao dịch",
        path: "/process/search-transaction"
      },
      {
        id: generateId(),
        name: "Kết quả xử lý maker",
        path: "/process/maker-result"
      },
      {
        id: generateId(),
        name: "Kết quả xử lý checker",
        path: "/process/checker-result"
      },
    ],
  },
  {
    id: generateId(),
    name: "Cấu hình",
    icon: SystemUpdate,
    children: [
      {
        id: generateId(),
        name: "Cấu hình so sánh",
        path: "/config/compare"
      },
      {
        id: generateId(),
        name: "Cấu hình đối tác",
        path: "/config/maker-merchant"
      },
      {
        id: generateId(),
        name: "Cấu hình ngày nghỉ",
        path: "/config/holiday"
      },
      {
        id: generateId(),
        name: "Cấu hình mã xử lý",
        path: "/config/code-pendding"
      },
    ]
  }
];

export default routers;