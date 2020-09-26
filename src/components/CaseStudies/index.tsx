import React from "react";

interface CaseStudiesProps {
  animate?: boolean;
}

const CaseStudies = React.forwardRef(
  (props: CaseStudiesProps, ref: React.Ref<HTMLDivElement>) => (
    <div className={`${props.animate ? "animate" : ""}`}>Hello World</div>
  )
);

export default CaseStudies;
