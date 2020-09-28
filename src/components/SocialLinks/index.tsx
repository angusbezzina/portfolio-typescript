import React from "react";
import Flex from "components/Flex";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./styles.module.css";

class SocialLinks extends React.Component {
  render() {
    return (
      <Flex direction="column" align="center" justify="space-between" className={styles.socialLinks}>
        <a
          href="https://twitter.com/angus1192"
          className="twitterLink socialIconLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://github.com/angusbezzina"
          className="githubLink socialIconLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
        <a
          href="https://www.linkedin.com/in/angus-bezzina"
          className="linkedInLink socialIconLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </Flex>
    );
  }
}

export default SocialLinks;
