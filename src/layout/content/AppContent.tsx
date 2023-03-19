import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { type RouteModel } from "../../model/RouterModel";
import routers from "../../routers/routers";
import { StyleContent } from "./contentStyles";
import { handleRouterContent } from "./handleAppContent";

export default function AppContent() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <StyleContent>
        <Routes>
          {handleRouterContent(routers)?.map(
            (item: RouteModel) =>
              item?.component && (
                <Route
                  key={item.id}
                  path={item.path}
                  element={<item.component />}
                />
              )
          )}
          <Route
            path="/"
            element={<Navigate to="/reconcicle/search/pending" />}
          />
        </Routes>
      </StyleContent>
    </Suspense>
  );
}
