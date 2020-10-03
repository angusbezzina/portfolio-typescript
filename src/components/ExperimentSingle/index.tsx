import React from "react";

import Flex from 'components/Flex';

import styles from './styles.module.css';

const ExperimentSingle = () => {
  return (
    <Flex direction="column" className={styles.experimentsContent}>
      <h2 className={styles.experimentsTitle}>
        Exper
        <br />
        iments<span className="blackText">.</span>
      </h2>
      <Flex className={styles.experimentsImage}></Flex>
      <Flex className={styles.experimentsContent}>
        <Flex className={styles.experimentsSubtitle}>
          <h3>
            This is my <span className="italicText redText">playground</span>
          </h3>
        </Flex>
        <Flex className={styles.experimentsText}>
          <p>
            Consequat hendrerit sollicitudin ac natoque duis mollis facilisi
            tristique, eu senectus suspendisse turpis a phasellus nisi, tortor
            magnis imperdiet venenatis cubilia in quis.
          </p>
          <p>
            Suspendisse aenean praesent vulputate euismod ad semper, odio nibh
            tincidunt libero facilisis arcu urna, eros ante natoque adipiscing
            enim.
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ExperimentSingle;