import React from "react";
import classnames from "classnames";

import Flex from "components/Flex";
import ContactForm from 'components/ContactForm';

import { useLanguage } from "components/LanguageContext";
import { contactDetails } from "utils/db/data";

import styles from "./styles.module.css";

const Contact = () => {
  const languageState = useLanguage();
  const language = languageState.state.language;
  const preTitle = contactDetails[language].preTitle;
  const title = contactDetails[language].title;
  const email = contactDetails.email;
  const phone = contactDetails.phone;

  return (
    <Flex className={styles.contactSection}>
      <Flex className={styles.contactCallout} direction="column">
        <Flex direction="column" className={styles.contactText}>
          <p>
            {preTitle}
          </p>
          <h4 className="redText">
            {title}
          </h4>
        </Flex>
        <Flex direction="column" align="start" className={styles.contactLinks}>
          <a
            href={`mailto:${email}`}
            className="link contactLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            {email}
          </a>
          <a
            href={`tel:${phone}`}
            className={classnames("link", styles.contactLink)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {phone}
          </a>
        </Flex>
      </Flex>
      <Flex direction="column" className={styles.contactForm}>
        <ContactForm />
      </Flex>
    </Flex>
  );
};

export default Contact;
