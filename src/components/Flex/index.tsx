import React from "react";
import classnames from "classnames";

import styles from "./styles.module.css";

type FlexProps = {
  align?: "start" | "end" | "center" | "stretch" | "space-between";
  alignSelf?: "start" | "end" | "center" | "stretch";
  className?: string;
  children?: React.ReactNode;
  isSpan?: string;
  style?: object;
  direction?: "row" | "column";
  grow?: boolean;
  justify?: "start" | "end" | "center" | "stretch" | "space-between";
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  reverse?: boolean;
  shrink?: boolean;
};

const Flex = React.forwardRef(
  (
    {
      align,
      alignSelf,
      children,
      className,
      direction = "row",
      grow,
      justify,
      padding = "none",
      reverse,
      shrink,
      ...props
    }: FlexProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={classnames(
          styles.flex,
          className,
          {
            [styles[`direction-${direction}`]]: direction,
            [styles[`align-${align}`]]: align,
            [styles[`alignSelf-${alignSelf}`]]: alignSelf,
            [styles[`justify-${justify}`]]: justify,
            [styles[`grow-${grow}`]]: typeof grow === "boolean",
            [styles[`shrink-${shrink}`]]: typeof shrink === "boolean",
            [styles.reverse]: reverse,
          },
          styles[`padding-${padding}`]
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);


export default Flex;
