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
}

const Experiments = React.forwardRef(
  (props: ExperimentsProps, ref: React.Ref<HTMLDivElement>) => (
    <Slider
      {...props.swiperProps}
      className={classnames(
        styles.experimentsSection,
        { animate: props.animate },
        { snapSection: props.snapTo }
      )}
    >
      {[...experiments.experimentList].map((experiment) => {
        return <ExperimentSingle key={experiment.slug} experimentData={experiment} />;
      })}
    </Slider>
  )
);

export default Experiments;
