import { GrMenu } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { GoCommentDiscussion, GoPlus, GoGitPullRequest } from "react-icons/go";
import { BsRobot } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaBookBookmark } from "react-icons/fa6";
import { GoInfo } from "react-icons/go";

import { FaRegCircle, FaProjectDiagram } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <div className="flex flex-col gap-3 pb-6 bg-black justify-start px-4 py-4">
        <div className="flex flex-row gap-3 items-center justify-between">
          <div className="flex items-center gap-3">
            <GrMenu className="border border-gray-400 p-2 w-8 h-8 rounded-lg text-gray-400" />
            <BsGithub className="w-8 h-8 text-white" />
            <p className="text-white text-sm p-2 rounded-lg hover:bg-gray-900 cursor-pointer font-semibold">
              wahyupratamaaa
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-1.5 border border-gray-600 text-left text-sm text-gray-300 rounded-lg w-60">
              <div className="flex items-center justify-between w-full overflow-hidden text-gray-400">
                <div className="flex items-center gap-2">
                  <CiSearch className="w-4 h-4" />
                  <span>
                    Type{" "}
                    <kbd className="border border-gray-600 text-white px-1 rounded">
                      /
                    </kbd>{" "}
                    to search
                  </span>
                </div>
                <div className="border-l border-gray-600 pl-4">
                  <GoCommentDiscussion className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </button>
            <button className="flex items-center gap-2 px-2 py-1 border border-gray-600 text-left text-sm text-gray-300 rounded-lg w-auto h-9">
              <div className="flex items-center justify-between w-full overflow-hidden text-gray-400">
                <div className="flex items-center gap-2">
                  <BsRobot className="w-5 h-5" />
                  <div className="border-l border-gray-600 pl-2">
                    <TiArrowSortedDown />
                  </div>
                </div>
              </div>
            </button>

            <div className="border-l border-gray-600 h-6"></div>
            <button className="flex items-center gap-2 px-2 py-1 border border-gray-600 text-left text-sm text-gray-300 rounded-lg w-auto h-9">
              <div className="flex items-center justify-between w-full overflow-hidden text-gray-400">
                <div className="flex items-center gap-2">
                  <GoPlus className="w-5 h-5" />
                  <TiArrowSortedDown />
                </div>
              </div>
            </button>
            <button className="flex items-center gap-2 px-2 py-2 border border-gray-600 text-left text-sm text-gray-300 rounded-lg w-auto h-9">
              <FaRegCircle className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-2 py-2 border border-gray-600 text-left text-sm text-gray-300 rounded-lg w-auto h-9">
              <GoGitPullRequest className="w-4 h-4" />
            </button>

            <img
              src="https://avatars.githubusercontent.com/u/111998022?v=4"
              alt="github-avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex  gap-1 text-white text-sm bg-black">
        <span className="flex items-center gap-2 hover:bg-gray-900 p-2 px-4 rounded-lg">
          <FiBookOpen className="w-4 h-4 text-gray-500" />
          Overview
        </span>
        <span className="flex items-center gap-2 hover:bg-gray-900 p-2 px-4 rounded-lg">
          <FaBookBookmark className="w-4 h-4 text-gray-500" />
          Repositories
          <p className="text-gray-400 bg-gray-900 w-5 h-5 rounded-full flex justify-center hover:bg-gray-950">
            32
          </p>
        </span>
        <span className="flex items-center gap-2 hover:bg-gray-900 p-2 px-4 rounded-lg">
          <FaProjectDiagram className="w-4 h-4 text-gray-500" />
          Projects
        </span>
        <span className="flex items-center gap-2 hover:bg-gray-900 p-2 px-4 rounded-lg">
          <GoGitPullRequest className="w-4 h-4 text-gray-500" />
          Package
        </span>
        <span className="flex items-center gap-2 hover:bg-gray-900 p-2 px-4 rounded-lg">
          <FaRegStar className="w-4 h-4 text-gray-500" />
          Stars
          <p className="text-gray-400 bg-gray-900 w-5 h-5 rounded-full flex justify-center hover:bg-gray-950">
            7
          </p>
        </span>
      </div>
      <div className="w-screen bg-[#08112e] text-white px-4 py-4 border-b border-t border-blue-400 flex gap-5 items-center ">
        <GoInfo className="text-blue-400" />
        <span className="text-sm">Your status has been updated.</span>
      </div>
    </div>
  );
}

export default Navbar;
