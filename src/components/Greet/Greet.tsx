import React from "react";

// const Greet = () => {
//   return <div>hello</div>;
// };

// export default Greet;

// ------------------------------------------------------------

// Test Driven Development

interface GreetProps {
  name?: string;
}

const Greet = (props: GreetProps) => {
  return <div>Hello {props.name}</div>;
};

export default Greet;
