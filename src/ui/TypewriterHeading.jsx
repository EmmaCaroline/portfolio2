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
    <h1 className="mx-auto text-white text-3xl md:text-4xl lg:text-5xl font-heading text-left sm:text-center whitespace-normal">
      {text}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
