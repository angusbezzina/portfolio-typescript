import React from "react";
import classnames from "classnames";

import Flex from "components/Flex";
import defaultBackgroundImage from "img/background-image.jpg";

import styles from "./styles.module.css";
import "styles/common.css";

interface ExperimentsProps {
  animate?: boolean;
  snapTo?: boolean;
}

const Experiments = React.forwardRef(
  (props: ExperimentsProps, ref: React.Ref<HTMLDivElement>) => (
    <Flex
      direction="column"
      justify="center"
      className={classnames(
        styles.experimentsSection,
        { animate: props.animate },
        { snapSection: props.snapTo }
      )}
    >
      <Flex direction="column" className={styles.experimentsContent}>
        <h2 className={styles.experimentsTitle}>
          Experi
          <br />
          ments<span className="blackText">.</span>
        </h2>
        <Flex className={styles.experimentsImageContainer}>
          <img
            className={styles.experimentsImage}
            src={defaultBackgroundImage}
            alt="Feature Experiment"
          />
        </Flex>
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
    </Flex>
  )
);

export default Experiments;
