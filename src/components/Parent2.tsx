import React from "react";

const btnFunction = () => {
  console.log("Btn Function2 😶`");
};

/** This is the context of the Parent1 */
export const Parent2Context = React.createContext({
  name: "Test",
  btnFunction
});

const Parent2 = () => {
  return (
    <div>
      This is Parent 2
    </div>
  );
};

export default Parent2;
