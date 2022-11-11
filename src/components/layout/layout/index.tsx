import React from "react";
import { LayoutProps } from "@pankod/refine-core";
import { Box } from "@pankod/refine-mantine";

import { Sider as DefaultSider } from "../sider";
import { Header as DefaultHeader } from "../header";

export const Layout: React.FC<LayoutProps> = ({
  Sider,
  Header,
  OffLayoutArea,
  children,
}) => {
  const SiderToRender = Sider ?? DefaultSider;
  const HeaderToRender = Header ?? DefaultHeader;

  return (
    <Box sx={{ display: "flex" }}>
      <SiderToRender />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <HeaderToRender />
        <Box
          component="main"
          sx={(theme) => ({
            padding: theme.spacing.sm,
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[8] : "white",
            minHeight: "90vh",
          })}
        >
          {children}
        </Box>
      </Box>
      {OffLayoutArea && <OffLayoutArea />}
    </Box>
  );
};
