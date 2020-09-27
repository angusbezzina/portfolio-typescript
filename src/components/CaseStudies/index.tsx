import React from "react";
import classnames from "classnames";

import Flex from "components/Flex";
import defaultBackgroundImage from "img/background-image.jpg";

import styles from "./styles.module.css";
import "styles/common.css";

interface CaseStudiesProps {
  animate?: boolean;
  snapTo?: boolean;
}

const CaseStudies = React.forwardRef(
  (props: CaseStudiesProps, ref: React.Ref<HTMLDivElement>) => (
    <Flex
      justify="center"
      direction="column"
      className={classnames(
        styles.caseStudiesSection,
        {"snapSection": props.snapTo},
        {"animate": props.animate},
      )}
    >
      <Flex className={styles.caseStudiesContent}>
        <Flex direction="column" className={styles.caseStudiesContentLeft}>
          <h2 className={styles.caseStudiesTitle}>
            Projects<span className="redText">.</span>
          </h2>
          <Flex className={styles.caseStudiesContentLeftInner}>
            <img
              className={styles.caseStudiesFeatureImage}
              src={defaultBackgroundImage}
              alt="Case Studies Feature"
            />
          </Flex>
        </Flex>
        <Flex className={styles.caseStudiesContentRight}>
          <Flex
            direction="column"
            className={styles.caseStudiesContentRightInner}
          >
            <h3 className={styles.caseStudiesSubtitle}>
              Commodo senectus <span className="italicText">vivamus</span>{" "}
              faucibus cum dictum
              <span className="redText">.</span>
            </h3>
            <p>
              Elit laoreet iaculis id cursus sodales nisi primis eros at,
              maecenas mi ultrices ornare litora duis facilisis nascetur, ad
              varius aliquam lorem cras morbi accumsan aptent. Nam congue nisi
              imperdiet litora convallis, orci nec quis himenaeos semper
              malesuada, inceptos torquent posuere ad.
            </p>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
);

export default CaseStudies;
