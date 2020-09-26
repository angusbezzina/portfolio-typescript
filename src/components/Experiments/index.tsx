import React from "react";

interface ExperimentsProps {
  animate?: boolean;
}

const Experiments = React.forwardRef(
  (props: ExperimentsProps, ref: React.Ref<HTMLDivElement>) => (
    <div className={`${props.animate ? "animate" : ""}`}>Hello World</div>
  )
);

export default Experiments;
