import React from "react";
import classnames from "classnames";

import Flex from "components/Flex";
// import ContactForm from 'components/ContactForm';

import { LanguageContext } from "components/LanguageContext";
import { contactDetails } from "utils/db/data";

import styles from "./styles.module.css";
import "styles/common.css";

interface ContactProps {
  animate?: boolean;
  snapTo?: boolean;
}

const Contact = React.forwardRef(
  (props: ContactProps, ref: React.Ref<HTMLDivElement>) => {
    const { state } = React.useContext(LanguageContext);
    const language = state.language;

    return (
      <Flex
        className={classnames(
          styles.contactSection,
          { animate: props.animate },
          { snapSection: props.snapTo }
        )}
      >
        <Flex className={styles.contactCallout}>
          <Flex direction="column" className={styles.contactText}>
            <p>
              {language === "english"
                ? contactDetails.preTitle
                : contactDetails.preTitleSpanish}
            </p>
            <h4 className="redText">
              {language === "english"
                ? contactDetails.title
                : contactDetails.titleSpanish}
            </h4>
          </Flex>
          <Flex
            direction="column"
            align="start"
            className={styles.contactLinks}
          >
            <a
              href={`mailto:${contactDetails.email}`}
              className="link contactLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactDetails.email}
            </a>
            <a
              href={`tel:${contactDetails.phone}`}
              className={classnames("link", styles.contactLink)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactDetails.phone}
            </a>
          </Flex>
        </Flex>
        {/* <Flex direction="column" className={styles.contactForm}>
        <ContactForm />
      </Flex> */}
      </Flex>
    );
  }
);

export default Contact;
