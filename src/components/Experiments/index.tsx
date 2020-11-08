import React from "react";
import classnames from "classnames";
import Slider from "react-slick";

import ExperimentSingle from "components/ExperimentSingle";

import formatSectionTitle from "utils/formatSectionTitle";
import { experiments } from "utils/db/data";
import { LanguageContext } from "components/LanguageContext";

import styles from "./styles.module.css";
import "styles/common.css";

type ExperimentsProps = {
  animate?: boolean;
  snapTo?: boolean;
  swiperProps: object;
};

const Experiments = React.forwardRef(
  (props: ExperimentsProps, ref: React.Ref<HTMLDivElement>) => {
    const { state } = React.useContext(LanguageContext);
    const language = state.language;

    return (
      <div
        className={classnames(styles.experimentsSectionContainer, {
          snapSection: props.snapTo,
          [styles.animate]: props.animate,
        })}
        ref={ref}
      >
        {language === "english"
          ? formatSectionTitle(
              experiments.title,
              styles.experimentsTitle,
              "blackText"
            )
          : formatSectionTitle(
              experiments.titleSpanish,
              styles.experimentsTitle,
              "blackText"
            )}
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
    );
  }
);

export default Experiments;
