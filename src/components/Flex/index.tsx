import React from "react";
import classnames from "classnames";

import styles from "./styles.css";

type FlexProps = {
  className?: string,
  children?: React.ReactNode,
  isSpan?: string,
  style?: object,
};

const Flex = ({ className, children, style, ...props }: FlexProps) => {
  return (
    <div
      className={classnames(styles.flex, className)}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;
