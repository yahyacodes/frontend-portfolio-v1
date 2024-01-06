import React, { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import "../App.css";

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        {backToTop && (
          <BsArrowUpShort className="button-top" onClick={handleScroll} />
        )}
      </div>
    </>
  );
};

export default BackToTop;
