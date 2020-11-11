import React from "react";
import { useForm } from "react-hook-form";
import classnames from "classnames";

import Flex from "components/Flex";

import { API_DEV_URI } from "utils/constants";

type ContactInquiry = {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const { register, handleSubmit, formState, errors, reset } = useForm<ContactInquiry>({
    mode: "onChange",
  });

  const onSubmit = (data:object, e:any) => {
    console.log("Submit event", e, data);

    fetch(API_DEV_URI, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          alert("Message Sent.");
          reset({
            name: "",
            email: "",
            message: "",
          });
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  };

  // console.log(errors);
  // console.log(JSON.stringify(formState));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classnames(
        "contactForm",
        `${
          formState.isValid === true ? "contactFormValid" : "contactFormInvalid"
        }`
      )}
    >
      <Flex direction="column" className="formInner">
        <input
          type="text"
          placeholder="Name"
          name="name"
          ref={register({ required: true, minLength: 3, maxLength: 80 })}
        />
        {errors.name && "A name is required."}

        <input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        {errors.email && "An email is required."}

        <textarea
          placeholder="Message"
          name="message"
          ref={register({ required: true, minLength: 20 })}
        />
        {errors.message && "A message is required."}

        <input type="submit" />
      </Flex>
    </form>
  );
};

export default ContactForm;
