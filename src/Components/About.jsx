import React from "react";
import resumePdf from "../assets/Yahya-dahir-resume.pdf";

const About = () => {
  return (
    <div id="about">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl sm:py-48 2xl:py-56 lg:py-20 text-gray-100">
          <div className="">
            <h1 className="text-xl font-bold tracking-tight sm:text-3xl">
              About me
            </h1>
            <p className="mt-6 text-gray-300 text-md leading-8">
              Computers always faccinated me, back in 2021 I was courius on how
              websites and systems were able to do what they do and that made me
              do some research on it, usually googling everything that came to
              my mind, this led me to coding.
            </p>
            <p className="mt-2 text-gray-300 text-md leading-8">
              I stated teaching myself how to code in September of the same
              year. My method of learning how to code was through youtube,
              googling documentations and through udemy courses. It was a
              journey of it's ups and downs. After teaching myself how to code
              for quite sometime, I now wanted to put a test on my skills.
            </p>
            <p className="mt-2 text-gray-300 text-md leading-8">
              I embarked the usual task of looking for jobs and internships
              began for me. I have been looking for a job for four months with
              unexpected ending of not landing on a job or even internships. I
              looked at the positive side of that and I thought why not go to
              software engineering schools around me and since then I'm now a
              software engineering student.
            </p>
            <div className="hidden sm:mb-8 sm:flex mt-2">
              <div className="relative rounded-full px-4 py-1 text-sm leading-6 ring-1 ring-gray-100/10 hover:ring-gray-100/20">
                <a
                  href={resumePdf}
                  target="_blank"
                  className="text-sm font-semibold leading-6"
                >
                  Resume
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
