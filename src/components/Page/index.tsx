import React from "react";
import classnames from "classnames";

import Flex from 'components/Flex';

import styles from "./styles.css";

type PageProps = {
  centered?: boolean,
  children?: React.ReactNode,
  className?: string,
};

const Page = ({ className, children, centered }: PageProps) => (
  <Flex
    className={classnames(styles.page, "page", className, {
      [styles.pageCentered]: centered,
    })}
  >
    {children}
  </Flex>
);

export default Page;
