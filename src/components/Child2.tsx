import Button from '@mui/material/Button'

interface Child2Props {
  onClick1: () => void
  onClick2: () => void
}

const Child2 = (props:Child2Props) => {
  return (
    <div>
      <span>This is Child2</span>
      <Button variant="text" onClick={props.onClick1}>Click Me</Button>
      <Button variant="text" onClick={props.onClick2}>Console log</Button>
    </div>
  );
};

export default Child2;
