import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function AnimatedText({ initialText, animatedTextArray }) {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: animatedTextArray,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy(); // cleanup Typed instance
    };
  }, [animatedTextArray]);

  return (
    <>
      {initialText} <span style={{ whiteSpace: "pre" }} ref={el} />
    </>
  );
}
