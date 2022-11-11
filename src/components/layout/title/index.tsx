import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Box } from "@pankod/refine-mantine";
import { MantineLogo } from "@mantine/ds";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Link to="/">
      <Box p="xs">
        {collapsed ? (
          <MantineLogo type="mark" size={30} />
        ) : (
          <MantineLogo size={30} />
        )}
      </Box>
    </Link>
  );
};
