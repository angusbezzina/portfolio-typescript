import React from "react";
import { useForm } from "react-hook-form";
import classnames from "classnames";

import Flex from 'components/Flex';

import { LanguageContext } from "components/LanguageContext";
import { submitContactForm, ContactInquiry } from "utils/api";
import styles from "./styles.module.css";

const ContactForm = () => {
  const { register, handleSubmit, formState, errors, reset } = useForm<ContactInquiry>({
    mode: "onChange",
  });
  const [message, setMessage] = React.useState("");
  const { state } = React.useContext(LanguageContext);
  const language = state.language;

  const onSubmit = async (data: ContactInquiry, e: any) => {
    const submissionData = {...data, language: language};

    try {
      await submitContactForm(submissionData);

      setMessage(`Thanks for your message ${data.name}! I'll be in touch soon 😁`);
      reset({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
      setMessage(`I'm sorry ${data.name}, it looks like something has gone wrong 😔`);
    }
  };

  // console.log(errors);
  // console.log(JSON.stringify(formState));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <input
        type="text"
        id="name"
        placeholder="Name"
        name="name"
        ref={register({ required: true, minLength: 3, maxLength: 80 })}
      />
      {errors.name && (
        <span role="alert" className={styles.formError}>
          Please enter a valid name.
        </span>
      )}

      <input
        type="text"
        id="email"
        placeholder="Email"
        name="email"
        ref={register({
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        })}
      />
      {errors.email && (
        <span role="alert" className={styles.formError}>
          Please enter a valid email.
        </span>
      )}

      <textarea
        placeholder="Message"
        id="message"
        name="message"
        ref={register({ required: true, minLength: 20 })}
      />
      {errors.message && (
        <span role="alert" className={styles.formError}>
          Please enter a message.
        </span>
      )}

      <button
        className={classnames(styles.formSubmit, {
          [styles.formSubmitValid]: formState.isValid,
        })}
        type="submit"
      >
        Send<span className="blackText">.</span>
      </button>
      {message && <Flex className={styles.formSubmissionMessage}>{message}</Flex>}
    </form>
  );
};

export default ContactForm;
