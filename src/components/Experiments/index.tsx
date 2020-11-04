import React from "react";
import classnames from "classnames";
import Slider from "react-slick";

import ExperimentSingle from "components/ExperimentSingle";

import { experiments } from "utils/db/data";

import styles from "./styles.module.css";
import "styles/common.css";

type ExperimentsProps = {
  animate?: boolean;
  snapTo?: boolean;
  swiperProps: object;
};

const Experiments = React.forwardRef(
  (props: ExperimentsProps, ref: React.Ref<HTMLDivElement>) => (
    <div ref={ref}>
      <Slider
        {...props.swiperProps}
        className={classnames(styles.experimentsSection, {
          snapSection: props.snapTo,
          [styles.animate]: props.animate,
        })}
      >
        {[...experiments.experimentList].map((experiment) => {
          return (
            <ExperimentSingle
              key={experiment.slug}
              experimentData={experiment}
              animate={props.animate}
            />
          );
        })}
      </Slider>
    </div>
  )
);

export default Experiments;
