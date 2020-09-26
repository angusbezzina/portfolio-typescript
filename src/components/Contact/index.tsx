import React from "react";

interface ContactProps {
  animate?: boolean;
}

const Contact = React.forwardRef(
  (props: ContactProps, ref: React.Ref<HTMLDivElement>) => (
    <div className={`${props.animate ? "animate" : ""}`}>Hello World</div>
  )
);

export default Contact;
