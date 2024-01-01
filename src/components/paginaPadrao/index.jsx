import { Banner } from "@/components/banner";
import { Outlet } from "react-router-dom";
export const PaginaPadrao = () => {
  return (
    <main>
      <Banner />
      <Outlet />
    </main>
  );
};
