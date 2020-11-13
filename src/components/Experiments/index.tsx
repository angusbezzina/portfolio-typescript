import React from "react";
import classnames from 'classnames';
import Slider from "react-slick";

import ExperimentSingle from "components/ExperimentSingle";

import formatSectionTitle from "utils/formatSectionTitle";
import { experiments } from "utils/db/data";
import { LanguageContext } from "components/LanguageContext";

import styles from "./styles.module.css";
import "styles/common.css";

type ExperimentsProps = {
  swiperProps: object;
};

const Experiments = React.forwardRef(
  (props: ExperimentsProps, ref: React.Ref<HTMLDivElement>) => {
    const { state } = React.useContext(LanguageContext);
    const language = state.language;
    const title = experiments[language].title;

    return (
      <div className={styles.experimentsSectionContainer} ref={ref}>
        {formatSectionTitle(title, styles.experimentsTitle, "blackText")}
        <Slider
          {...props.swiperProps}
          className={classnames(styles.experimentsSection, "sliderSection")}
        >
          {[...experiments.experimentList].map((experiment) => {
            return (
              <ExperimentSingle
                key={experiment.slug}
                experimentData={experiment}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
);

export default Experiments;
