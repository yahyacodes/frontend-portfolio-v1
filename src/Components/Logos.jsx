import React from "react";
import Marquee from "react-fast-marquee";
import logo from "../assets/React.png";
import tailwindLogo from "../assets/tailwindcss.png";
import cssLogo from "../assets/css.png";
import htmlLogo from "../assets/html5.png";
import bootstrapLogo from "../assets/bootstrap.png";
import githubLogo from "../assets/github.png";
import gitLogo from "../assets/git.png";
import "../App.css";
import Fade from "react-reveal/Fade";

const Logos = () => {
  return (
    <div className="xl:py-0">
      <Fade top distance="50%">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 image-gradient">
          <Marquee direction="left" speed={100} delay={5}>
            <div className="mt-6">
              <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12">
                {/* LOGO 1 */}
                <li className="flex-none">
                  <img src={htmlLogo} alt="" className="w-32" />
                </li>

                {/* LOGO 2 */}
                <li className="flex-none">
                  <img src={cssLogo} alt="" className="w-32" />
                </li>

                {/* LOGO 3 */}
                <li className="flex-none">
                  <img src={logo} alt="" className="w-32" />
                </li>

                {/* LOGO 4 */}
                <li className="flex-none">
                  <img src={tailwindLogo} alt="" className="w-48" />
                </li>

                {/* LOGO 5 */}
                <li className="flex-none">
                  <img src={bootstrapLogo} alt="" className="w-48" />
                </li>

                {/* LOGO 6 */}
                <li className="flex-none">
                  <img src={githubLogo} alt="" className="w-32" />
                </li>
                {/* LOGO 7 */}
                <li className="flex-none">
                  <img src={gitLogo} alt="" className="w-32" />
                </li>
              </ul>
            </div>
          </Marquee>
        </div>
      </Fade>
    </div>
  );
};

export default Logos;
