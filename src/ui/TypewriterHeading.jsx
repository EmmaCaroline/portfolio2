import { useState, useEffect } from "react";

export default function TypewriterHeading() {
  const [text, setText] = useState("");
  const fullText = "Welcome - I'm Emma Caroline Brander, a front-end developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 50); // adjust typing speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="absolute top-20 md:top-52 left-1/2 -translate-x-1/2 text-white text-2xl md:text-4xl font-heading max-w-[600px] text-left md:text-center whitespace-normal">
      {text}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
