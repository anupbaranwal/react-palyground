import { useRef } from "react";

const UseRefSample = () => {
  const inputRef = useRef(null);

  const focus = () => {
    inputRef.current.focus();
  };

  const blur = () => {
    inputRef.current.blur();
  };

  return (
    <>
      <h3>Use Ref Sample Component</h3>
      <button className="btn btn-primary" onClick={focus}>
        Focus
      </button>
      <button className="btn btn-secondary ms-2" onClick={blur}>
        Blur
      </button>
      <input type="text" className="form-control mt-3" ref={inputRef} />
    </>
  );
};

export default UseRefSample;
