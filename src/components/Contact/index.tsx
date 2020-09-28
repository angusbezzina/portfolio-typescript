import React from "react";
import classnames from "classnames";

import Flex from "components/Flex";
// import ContactForm from 'components/ContactForm';

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
        { animate: props.animate },
        { snapSection: props.snapTo }
      )}
    >
      <Flex className={styles.contactCallout}>
        <Flex direction="column" className={styles.contactText}>
          <h4>Want to work with me?</h4>
          <p>Get in touch</p>
        </Flex>
        <Flex direction="column" className={styles.contactLinks}>
          <a
            href="mailto:angusbezzina@gmail.com"
            className="link contactLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            angusbezzina@gmail.com
          </a>
          <a
            href="tel:+61423269154"
            className="link contactLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            +61 423 269 154
          </a>
        </Flex>
      </Flex>
      {/* <Flex direction="column" className={styles.contactForm}>
        <ContactForm />
      </Flex> */}
    </Flex>
  )
);

export default Contact;
