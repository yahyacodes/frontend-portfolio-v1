import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import financeApp from "../assets/finance-app.png";
import githubSearchApp from "../assets/github-search-app.png";
import newsApp from "../assets/news-app.png";
import postFeeds from "../assets/post-feeds.png";
import Fade from "react-reveal/Fade";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const Projects = () => {
  return (
    <div
      className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1 max-w-4xl gap-2 mx-auto"
      id="projects"
    >
      <Fade top distance="50%">
        <div className="max-w-md bg-color ring-1 ring-gray-100/10 rounded-lg shadow">
          <img className="rounded-t-lg" src={githubSearchApp} alt="" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                GitHub users search App
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              In this GitHub users search App, I used react and tailwindcss to
              build this application. This application is fetching{" "}
              <a
                className="hover:text-blue-400"
                target="_blank"
                href="https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28"
              >
                GitHub users API
              </a>{" "}
              and I followed the documentation of this API to build the whole
              project
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              In this application a user can search username and it will show
              information about the searched username and the user can click on
              the username which will take the user to the username's GitHub
              account profile
            </p>
            <div className="mt-10 flex gap-x-6 text-gray-100 justify-end">
              <a href="#">
                <BsGithub className="text-2xl" />
              </a>

              <a href="#">
                <BsGlobe className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-md bg-color ring-1 ring-gray-100/10 rounded-lg shadow">
          <img className="rounded-t-lg" src={newsApp} alt="" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                News App
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              In this News App, I used React and Tailwindcss to build this
              application. This application is fetching{" "}
              <a
                className="hover:text-blue-400"
                target="_blank"
                href="https://newsapi.org/"
              >
                news API
              </a>{" "}
              and I followed the documentation in of this API to build out this
              application.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Since some users read different news sites from different sites, I
              have put three different news sites together and no one is left
              out, from the users grandmother to the users techie brother and
              even the user him/her self. everyone got a piece.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              In this application a user can read headlines from tech to local
              and even international.
            </p>
            <div className="mt-10 flex gap-x-6 text-gray-100 justify-end">
              <a href="#">
                <BsGithub className="text-2xl" />
              </a>

              <a href="#">
                <BsGlobe className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-md bg-color ring-1 ring-gray-100/10 rounded-lg shadow">
          <img className="rounded-t-lg" src={postFeeds} alt="" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Post feeds App
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              In this post feeds App, I used React and Tailwindcss to build this
              application. This application is fetching data from{" "}
              <a
                className="hover:text-blue-400"
                target="_blank"
                href="https://firebase.google.com/"
              >
                Firebase.
              </a>{" "}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              This application is inspired by{" "}
              <a
                className="hover:text-blue-400"
                target="_blank"
                href="https://twitter.com/"
              >
                twitter's for you tab
              </a>{" "}
              trying to build something similar to that I built this application
              which will allow user to make a post and also delete post
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              This is a very basic application a user does not need to login or
              create and account to get access of this application.
            </p>
            <div className="mt-10 flex gap-x-6 text-gray-100 justify-end">
              <a href="#">
                <BsGithub className="text-2xl" />
              </a>

              <a href="#">
                <BsGlobe className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-md bg-color ring-1 ring-gray-100/10 rounded-lg shadow">
          <img className="rounded-t-lg" src={financeApp} alt="" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Finance App
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              In this finance App, I used React and Tailwindcss to build this
              application. This application is fetching data from{" "}
              <a
                className="hover:text-blue-400"
                target="_blank"
                href="https://firebase.google.com/"
              >
                Firebase.
              </a>{" "}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              This application is to help user track his/her finances. A user
              can add income and give description about the income and also do
              the same for savings and expenses. This appliaction will help the
              user to know of how they spent their money.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              This is a very basic application a user does not need to login or
              create and account to get access of this application.
            </p>
            <div className="flex items-center gap-x-6 text-gray-400 mt-6">
              <a href="https://github.com/yahyacodes" target="_blank">
                <BsGithub className="text-2xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/yahya-burhan/"
                target="_blank"
              >
                <BsGlobe className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default Projects;
