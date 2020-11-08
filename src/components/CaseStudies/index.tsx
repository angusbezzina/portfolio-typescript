import React from "react";
import classnames from "classnames";
import Slider from "react-slick";

import CaseStudySingle from "components/CaseStudySingle";

import { LanguageContext } from "components/LanguageContext";
import { caseStudies } from "utils/db/data";

import formatSectionTitle from "utils/formatSectionTitle";

import styles from "./styles.module.css";
import "styles/common.css";

interface CaseStudiesProps {
  animate?: boolean;
  snapTo?: boolean;
  swiperProps: object;
}

const CaseStudies = React.forwardRef(
  (props: CaseStudiesProps, ref: React.Ref<HTMLDivElement>) => {
    const { state } = React.useContext(LanguageContext);
    const language = state.language;

    return (
      <div
        className={classnames(styles.caseStudiesSectionContainer, {
          [styles.animate]: props.animate,
          snapSection: props.snapTo,
        })}
        ref={ref}
      >
        {language === "english"
          ? formatSectionTitle(
              caseStudies.title,
              styles.caseStudiesTitle,
              "redText"
            )
          : formatSectionTitle(
              caseStudies.titleSpanish,
              styles.caseStudiesTitle,
              "redText"
            )}
        <Slider
          {...props.swiperProps}
          className={classnames(styles.caseStudiesSection, {
            [styles.animate]: props.animate,
            snapSection: props.snapTo,
          })}
        >
          {[...caseStudies.projects].map((project) => {
            return (
              <CaseStudySingle
                key={project.slug}
                projectData={project}
                animate={props.animate}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
);

export default CaseStudies;
