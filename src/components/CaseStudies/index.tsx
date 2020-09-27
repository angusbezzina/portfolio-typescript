import React from "react";
import classnames from 'classnames';

import Flex from 'components/Flex';

import styles from './styles.module.css';
import 'styles/common.css';

interface CaseStudiesProps {
  animate?: boolean;
}

const CaseStudies = React.forwardRef(
  (props: CaseStudiesProps, ref: React.Ref<HTMLDivElement>) => (
    <div
      className={classnames(styles.caseStudiesSection, `${props.animate ? "animate" : ""}`)}
    >
      <Flex className={styles.caseStudiesContent}>
        <Flex className={styles.caseStudiesContentLeft}>
          <h2 className={styles.caseStudiesTitle}>
            Case Studies<span className="redText">.</span>
          </h2>
          <Flex className={styles.caseStudiesContentLeftInner}>
            Skills to go here.
          </Flex>
        </Flex>
        <Flex className={styles.caseStudiesContentRight}>
          <h3 className={styles.caseStudiesSubtitle}>
            Commodo senectus <span className="italicText">vivamus</span>{" "}
            faucibus cum dictum
            <span className="redText">.</span>
          </h3>
          Elit laoreet iaculis id cursus sodales nisi primis eros at, maecenas
          mi ultrices ornare litora duis facilisis nascetur, ad varius aliquam
          lorem cras morbi accumsan aptent. Nam congue nisi imperdiet litora
          convallis, orci nec quis himenaeos semper malesuada, inceptos torquent
          posuere ad.
        </Flex>
      </Flex>
    </div>
  )
);

export default CaseStudies;
