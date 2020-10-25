import React from "react";
import classnames from "classnames";
import Slider from "react-slick";

import CaseStudySingle from "components/CaseStudySingle";

import { caseStudies } from "utils/db/data";

import styles from "./styles.module.css";
import "styles/common.css";

interface CaseStudiesProps {
  animate?: boolean;
  snapTo?: boolean;
  swiperProps: object;
}

const CaseStudies = React.forwardRef(
  (props: CaseStudiesProps, ref: React.Ref<HTMLDivElement>) => (
    <Slider
      {...props.swiperProps}
      className={classnames(
        styles.caseStudiesSection,
        { animate: props.animate },
        { snapSection: props.snapTo }
      )}
    >
      {[...caseStudies.projects].map((project) => {
        return <CaseStudySingle key={project.slug} projectData={project} />;
      })}
    </Slider>
  )
);

export default CaseStudies;
