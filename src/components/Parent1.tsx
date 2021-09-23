import React, { useState } from "react";
import Child1 from "./Child1";

const btnFunction = () => {
  console.log("Btn Function 😶`");
};

/** This is the context of the Parent1 */
export const Parent1Context = React.createContext({
  number: 0,
  setNumber: (value: any) => {},
  btnFunction: () => {},
});

const Parent1 = () => {
  const [number, setNumber] = useState<number>(0);
  const contextValue = { number, setNumber, btnFunction };

  return (
    <Parent1Context.Provider value={contextValue}>
      <div>
        Value in the parent: {number}
        <Child1 />
      </div>
    </Parent1Context.Provider>
  );
};

export default Parent1;
