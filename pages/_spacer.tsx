interface IProp {
  height?: number;
}

function Spacer({ height }: IProp): JSX.Element {
  return <div style={{ height: height || "20px" }}></div>;
}

export default Spacer;
