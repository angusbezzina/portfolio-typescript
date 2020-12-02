import React from "react";
import classnames from "classnames";

import Flex from "components/Flex";

import styles from "./styles.module.css";

type PageProps = {
  centered?: boolean;
  children?: React.ReactNode;
  id?: string;
  className?: string;
  align?: "start" | "end" | "center" | "stretch" | "space-between";
  direction?: "row" | "column";
  justify?: "start" | "end" | "center" | "stretch" | "space-between";
};

const Page = ({
  align,
  centered,
  children,
  className,
  direction = "column",
  id,
  justify,
  ...props
}: PageProps) => (
  <Flex
    direction={direction}
    className={classnames(styles.page, className, {
      [styles.pageCentered]: centered,
    })}
    id={id}
    align={centered ? "center" : align}
    justify={centered ? "center" : justify}
    {...props}
  >
    {children}
  </Flex>
);

export default Page;
