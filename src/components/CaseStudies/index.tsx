import React from "react";
import classnames from "classnames";
import Slider from "react-slick";

import CaseStudySingle from "components/CaseStudySingle";

import { useLanguage } from "components/LanguageContext";
import { caseStudies } from "utils/db/data";

import formatSectionTitle from "utils/formatSectionTitle";

import styles from "./styles.module.css";

interface CaseStudiesProps {
  swiperProps: object;
}

const CaseStudies = React.forwardRef(
  (props: CaseStudiesProps, ref: React.Ref<HTMLDivElement>) => {
    const languageState = useLanguage();
    const language = languageState.state.language;
    const title = caseStudies[language].title;

    return (
      <div className={classnames(styles.caseStudiesSectionContainer)} ref={ref}>
        {formatSectionTitle(title, styles.caseStudiesTitle, "redText")}
        <Slider
          {...props.swiperProps}
          className={classnames(styles.caseStudiesSection)}
        >
          {[...caseStudies.projects].map((project) => {
            return (
              <CaseStudySingle
                key={project.slug}
                projectData={project}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
);

export default CaseStudies;
