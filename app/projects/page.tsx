import { ProjectList } from "../static/ProjectList";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="py-10 px-5">
        <div className="flex flex-col items-center justify-center w-full max-w-8xl py-5 gap-5">
          <h1 className="text-5xl font-bold">Personal Projects</h1>
          <label htmlFor="search_project">
            <input
              className="bg-[#1e1e1e] py-3 px-5 text-lg rounded"
              type="text"
              name="search_project"
              id="search_project"
              placeholder="Search Project"
            />
          </label>
        </div>

        <div className="flex flex-wrap flex-row items-center justify-center gap-5">
          {ProjectList.map((result, key) => {
            return (
              <div className="max-w-80" key={key}>
                <Image
                  className="w-80 h-52"
                  src={result.image}
                  alt="Project Image"
                />
                <h1 className="font-bold text-lg">{result.name}</h1>
                <p>{result.skills}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
