import Player from "@/components/Player";
import Image from "next/image";

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
        Next Player
      </p>
      <div className="w-full flex justify-center items-center flex-col">
        <Player source={"/videos/video1.mp4"} width={100} />
      </div>
      <div>
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
        <p className="text-xs pt-2 tracking-wider"></p>
      </div>
    </main>
  );
}

/*
progress-width = (currentTime/Duration)*100;
currentTime = (e.target.value * duration )/100;
*/
