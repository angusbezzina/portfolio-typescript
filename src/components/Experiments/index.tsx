import React from "react";
import classnames from 'classnames';

import Flex from 'components/Flex';

import styles from './styles.module.css';
import 'styles/common.css';

interface ExperimentsProps {
  animate?: boolean;
}

const Experiments = React.forwardRef(
  (props: ExperimentsProps, ref: React.Ref<HTMLDivElement>) => (
    <div
      className={classnames(
        styles.experimentsSection,
        `${props.animate ? "animate" : ""}`
      )}
    >
      <Flex className={styles.experimentsContent}>
        <h2 className={styles.experimentsTitle}>
          Experiments<span className="redText">.</span>
        </h2>
        <Flex className={styles.experimentsImage}>
          <img src="" alt="" />
        </Flex>
        <Flex className={styles.experimentsText}></Flex>
      </Flex>
    </div>
  )
);

export default Experiments;
