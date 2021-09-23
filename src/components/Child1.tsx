import { useContext } from "react";
import Child2 from "./Child2";
import { Parent1Context } from "./Parent1";

const Child1 = () => {
 const { setNumber, btnFunction } = useContext(Parent1Context);
 const onClick1 = () => setNumber((prevNumber:number) => prevNumber + 1)
 const onClick2 = () => btnFunction()

  return (
    <div>
      <div>This is Child1</div>
      <Child2 onClick1={onClick1} onClick2={onClick2}/>
    </div>
  );
};

export default Child1;
