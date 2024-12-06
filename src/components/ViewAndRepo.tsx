import Link from "next/link";
import { ProjectUrls } from "../types/ProjectType";

const ViewAndRepo = ({deploy, repo}: ProjectUrls) => {
  return (
    <div className="rounded m-3 gap-2 p-1 flex h-10 dark:text-white text-black">
      <button
        type="button"
        className="flex-1 hover:scale-110 relative z-[2] duration-700 overflow-hidden rounded-md group"
      >
        <div className="absolute group-hover:-translate-x-20 translate-x-[80%] -translate-y-[55%] duration-700 z-[1] w-[600px] h-[500px] rotate-45 bg-gradient-to-r from-blue-950 via-blue-500 to-cyan-500 "></div>
        <Link className="relative z-[2]" href={repo} target="_blank">
        Repository
        </Link>
      </button>
      <button
        type="button"
        className="flex-1 hover:scale-110 relative z-[2] duration-700 overflow-hidden rounded-md group"
      >
        <div className="absolute group-hover:-translate-x-20 translate-x-[80%] -translate-y-[55%] duration-700 z-[1] w-[600px] h-[500px] rotate-45 bg-gradient-to-r from-blue-950 via-blue-500 to-cyan-500 "></div>
        <Link className="relative z-[2]" href={deploy} target="_blank">
          View
        </Link>
      </button>
    </div>
  );
};

export default ViewAndRepo;