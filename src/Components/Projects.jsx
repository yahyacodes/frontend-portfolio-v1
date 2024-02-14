import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import financeApp from "../assets/finance-app.png";
import githubSearchApp from "../assets/github-search-app.png";
import pokemonApp from "../assets/pokemon_project.png";
import postFeeds from "../assets/post-feeds.png";

const Projects = () => {
  return (
    <div
      className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1 max-w-4xl gap-2 mx-auto"
      id="projects"
    >
      <div className="max-w-md bg-color ring-1 ring-gray-100/10 rounded-lg shadow">
        <img className="rounded-t-lg" src={githubSearchApp} alt="" />
        <div className="p-5">
          <div className="grid grid-cols-2 gap-0">
            <div>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                GitHub users search App
              </h5>
            </div>

            <div className="flex gap-x-6 text-gray-100 justify-end">
              <a
                target="_blank"
                href="https://github.com/yahyacodes/github-search-app"
              >
                <BsGithub className="text-2xl" />
              </a>

              <a
                target="_blank"
                href="https://github-search-app-neon.vercel.app/"
              >
                <BsGlobe className="text-2xl" />
              </a>
            </div>
          </div>
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
        </div>
      </div>
      <div className="max-w-md bg-color ring-1 ring-gray-100/10 rounded-lg shadow">
        <img className="rounded-t-lg" src={pokemonApp} alt="" />
        <div className="p-5">
          <div className="grid grid-cols-2 gap-0">
            <div>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Pokemon App
              </h5>
            </div>

            <div className="flex gap-x-6 text-gray-100 justify-end">
              <a target="_blank" href="https://github.com/yahyacodes/pokemon">
                <BsGithub className="text-2xl" />
              </a>

              <a target="_blank" href="https://pokemon-nu-sage.vercel.app/">
                <BsGlobe className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="mt-5">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              In this News App, I used React and Tailwindcss to build this
              application. This application is fetching{" "}
              <a
                className="hover:text-blue-400"
                target="_blank"
                href="https://pokeapi.co/"
              >
                pokemon API
              </a>{" "}
              and I followed the documentation in of this API to build out this
              application.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              In this application a user can search for a pokemon and will
              recieve details about the pokemon. Not everyone knows aboute
              pokemons even me I had no idea pokemons existed but I was
              acknowledge about them by my nephews and if you want to know about
              them you can have a look at them in my app.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-md bg-color ring-1 ring-gray-100/10 rounded-lg shadow">
        <img className="rounded-t-lg" src={postFeeds} alt="" />
        <div className="p-5">
          <div className="grid grid-cols-2 gap-0">
            <div>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Post Feeds App
              </h5>
            </div>

            <div className="flex gap-x-6 text-gray-100 justify-end">
              <a
                target="_blank"
                href="https://github.com/yahyacodes/post-feeds"
              >
                <BsGithub className="text-2xl" />
              </a>

              <a target="_blank" href="https://post-feeds.vercel.app/">
                <BsGlobe className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="mt-5">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              In this Post feeds App, I used react and tailwindcss to build this
              application. This application is fetching data from{" "}
              <a
                className="hover:text-blue-400"
                target="_blank"
                href="https://firebase.google.com/"
              >
                Firebase
              </a>{" "}
              This project is inspired by twitter's post feeds.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              In this application a user can create a post and the user is able
              to see the post. A user can also delete post after the user
              created the post
            </p>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              This project was a learning curve for me as I recetenly learnt
              about firerbase and what's best other than practicing it with a
              project
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-md bg-color ring-1 ring-gray-100/10 rounded-lg shadow">
        <img className="rounded-t-lg" src={financeApp} alt="" />
        <div className="p-5">
          <div className="grid grid-cols-2 gap-0">
            <div>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Finance App
              </h5>
            </div>

            <div className="flex gap-x-6 text-gray-100 justify-end">
              <a
                target="_blank"
                href="https://github.com/yahyacodes/finance-app"
              >
                <BsGithub className="text-2xl" />
              </a>

              <a
                target="_blank"
                href="https://yahyacodes-finance-app.vercel.app/"
              >
                <BsGlobe className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="mt-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
