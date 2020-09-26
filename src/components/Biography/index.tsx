import React from "react";

interface BiographyProps {
  animate?: boolean;
}

const Biography = React.forwardRef(
  (props: BiographyProps, ref: React.Ref<HTMLDivElement>) => (
    <div className={`${props.animate ? "animate" : ""}`}>
      Hi, my name is Angus and welcome to my portfolio.
      I'm a software engineer with skills in React, NodeJS, Typescript, Python, PHP, HTML, CSS, AWS and Serverless amongst other things.
      I've created this site as a place where you can connect with me and explore my work and the projects I experiment with in my spare time.
      Hope you enjoy it!
    </div>
  )
);

export default Biography;
