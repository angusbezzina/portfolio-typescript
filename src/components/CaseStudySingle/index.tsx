import React from 'react';

import Flex from 'components/Flex';

import defaultBackgroundImage from "img/background-image.jpg";

import styles from './styles.module.css';
import 'styles/common.css';


const CaseStudySingle = () => {
  return (
    <Flex className={styles.caseStudiesContent}>
      <Flex direction="column" className={styles.caseStudiesContentLeft}>
        <h2 className={styles.caseStudiesTitle}>
          Pro
          <br />
          jects<span className="redText">.</span>
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
            Elit laoreet iaculis id cursus sodales nisi primis eros at, maecenas
            mi ultrices ornare litora duis facilisis nascetur, ad varius aliquam
            lorem cras morbi accumsan aptent. Nam congue nisi imperdiet litora
            convallis, orci nec quis himenaeos semper malesuada, inceptos
            torquent posuere ad.
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CaseStudySingle;