import React from "react";
import classnames from "classnames";

import Flex from "components/Flex";

import styles from "./styles.module.css";
import "styles/common.css";

interface ContactProps {
  animate?: boolean;
  snapTo?: boolean;
}

const Contact = React.forwardRef(
  (props: ContactProps, ref: React.Ref<HTMLDivElement>) => (
    <Flex
      className={classnames(
        styles.contactSection,
        { "animate": props.animate },
        { "snapSection": props.snapTo }
      )}
    >
      <Flex direction="column" className={styles.contactCallout}>
        <h4>Want to work with me?</h4>
      </Flex>
    </Flex>
  )
);

export default Contact;
