import Player from "@/components/Player";
// import Image from "next/image";
// import ReactMarkdown from "react-markdown";
import { AiOutlineGithub } from "react-icons/ai";

export default function Home() {
  const props = [
    {
      attribute: "source",
      value: "<url> or locale source of the video",
      type: "string",
    },
    {
      attribute: "width",
      value: "<value in %> and by default value is 100%",
      type: "number",
    },
    {
      attribute: "loop",
      value: "by default false",
      type: "boolean",
    },
  ];

  return (
    <main className="text-white p-5">
      <p className="text-center pb-5 font-black md:text-6xl text-2xl ">
        Next Js Player 🚀
      </p>
      <div className="md:w-[60%] mx-auto flex justify-center items-center flex-col">
        <Player source={"/videos/video1.mp4"} width={100} />
      </div>
      <h1 className="text-center md:w-[60%] mx-auto md:text-xl text-base">
        {'"'}next-js-player{'"'} is video player that supports both react and
        next js{"(i.e pages router and app router)"}
      </h1>
      <div className="pt-5 text-center">
        <p>
          ***Follow all the instructions given below to use next-js-player***
        </p>
      </div>
      <div className="md:w-[60%] mx-auto overflow-hidden">
        <p className="pt-5 font-bold text-2xl pb-2 text-center">Installation</p>
        <div className="w-full space-y-4">
          <p>1. Run the command below to install next-js-player</p>
          <div className="bg-gray-800 w-full p-5 rounded-xl overflow-auto">
            <code>npm i next-js-player</code>
          </div>
          <p>or</p>
          <div className="bg-gray-800 w-full p-5 rounded-xl overflow-auto">
            <code>yarn add next-js-player</code>
          </div>
          <p>2. Run the command below to install react-icons</p>
          <div className="bg-gray-800 w-full p-5 rounded-xl">
            <code>npm i react-icons</code>
          </div>
          <p>or</p>
          <div className="bg-gray-800 w-full p-5 rounded-xl">
            <code>yarn add react-icons</code>
          </div>
          <p>
            3. Run the command below to install tailwindcss, if not installed
          </p>
          <div className="bg-gray-800 w-full p-5 rounded-xl">
            <code className="block">npm install -D tailwindcss</code>
            <code className="block">npx tailwindcss init</code>
          </div>
          <p>or</p>
          <div className="bg-gray-800 w-full p-5 rounded-xl">
            <code className="block">yarn add -D tailwindcss</code>
            <code className="block">yarn tailwindcss init</code>
          </div>
          <p className="pt-5 font-bold text-2xl pb-2 text-center">
            Configurations
          </p>

          <p>
            4. Add the below css to the globals.css {"(for Next Js)"} or to the
            index.css/App.css {"(for React Js)"}
          </p>
          <div className="bg-gray-800 w-full p-5 rounded-xl">
            <code>
              {
                "@tailwind base; @tailwind components; @tailwind utilities; :root { --foreground-rgb: 0, 0, 0; --background-start-rgb: 214, 219, 220; --background-end-rgb: 255, 255, 255; } .player-controls { bottom: -4rem !important; } .video-wraper:hover > .player-controls { bottom: -15px !important; } ::-webkit-media-controls { display: none !important; } video::-webkit-media-controls { display: none !important; } video::-webkit-media-controls-enclosure { display: none !important; }"
              }
            </code>
          </div>
          <h1 className="font-bold">For Next Js:</h1>
          <p>5. Add the configs below to install tailwindcss.config.js</p>
          <div className="bg-gray-800 w-full p-5 rounded-xl overflow-x-auto">
            <code className="block">
              {"/** @type {import('tailwindcss').Config} */"}
            </code>
            <code className="block">{"module.exports = {"}</code>
            <code className="block">{"content: ["}</code>
            <code className="block">
              {'"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",'}
            </code>
            <code className="block">
              {'"./src/components/**/*.{js,ts,jsx,tsx,mdx}",'}
            </code>
            <code className="block">
              {'"./src/app/**/*.{js,ts,jsx,tsx,mdx}",'}
            </code>
            <code className="block bg-gray-900">
              {'"./node_modules/next-js-player/**/*.{js,ts,jsx,tsx,mdx}",'}
            </code>
            <code className="block">{"],"}</code>
            <code className="block">{"theme: {"}</code>
            <code className="block">{"extend: {"}</code>
            <code className="block">{"backgroundImage: {"}</code>
            <code className="block">
              {
                '"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",'
              }
            </code>
            <code className="block">
              {
                '"gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",'
              }
            </code>
            <code className="block">{"},"}</code>
            <code className="block">{"},"}</code>
            <code className="block">{"},"}</code>
            <code className="block">{"plugins: [],"}</code>
            <code className="block">{"};"}</code>
          </div>
          <h1 className="font-bold">For React Js:</h1>
          <p>5. Add the configs below to install tailwindcss.config.js</p>
          <div className="bg-gray-800 w-full p-5 rounded-xl overflow-x-auto">
            <code className="block">
              {"/** @type {import('tailwindcss').Config} */"}
            </code>
            <code className="block">{"module.exports = {"}</code>
            <code className="block">
              {'content: ["./src/**/*.{js,jsx,ts,tsx}"],'}
            </code>
            <code className="block">{"theme: { extend: {}},"}</code>
            <code className="block">{"plugins: [],"}</code>
            <code className="block">{"};"}</code>
          </div>
          <p className="pt-5 font-bold text-2xl pb-2 text-center">
            How To Use?(Example)
          </p>
          <div className="bg-gray-800 w-full p-5 rounded-xl overflow-x-auto">
            <code className="block">import Player from "next-js-player";</code>
            <code className="block">{"export default function Home() {"}</code>
            <code className="block">{"return ("}</code>
            <code className="block">{"<main>"}</code>
            <code className="block">
              {'<Player source={"<source url/path>"} width={100} />'}
            </code>
            <code className="block">{"</main>"}</code>
            <code className="block">{");"}</code>
            <code className="block">{"}"}</code>
          </div>
        </div>
      </div>
      <div className="md:w-[60%] mx-auto">
        <p className="pt-5 font-bold text-2xl pb-2 text-center">Properties</p>
        <div className="overflow-hidden w-full flex flex-col justify-center items-center">
          <div className="w-full bg-black">
            <div className="card flex text-center bg-gray-800 p-4 border-b border-gray-600 items-center">
              <p className="w-1/3">Type</p>
              <p className="w-1/3">Attributes</p>
              <p className="w-1/3">Values</p>
            </div>
            {props.map((item, index) => (
              <div
                key={index}
                className="card flex text-center bg-gray-800 md:p-4 p-2 md:text-base text-xs border-b border-gray-600 items-center justify-between"
              >
                <p className="w-1/3">{item.type}</p>
                <p className="w-1/3">{item.attribute}</p>
                <p className="w-1/3">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold pt-5 ">Repository</p>
          <p className="pt-2 tracking-wider flex items-center space-x-2 text-base pb-10">
            <span className="flex items-center">
              <span>
                <AiOutlineGithub />
              </span>
              <span>github:</span>
            </span>
            <a
              href="https://github.com/ScreenTechnicals/next-js-player/tree/main"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/ScreenTechnicals/next-js-player
            </a>
          </p>
        </div>
        <p className="pt-5 font-bold text-2xl pb-2">Versions</p>
        <p>v1.1.6: current stable version</p>
      </div>
    </main>
  );
}

/*
progress-width = (currentTime/Duration)*100;
currentTime = (e.target.value * duration )/100;
*/
