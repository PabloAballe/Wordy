/* @ts-ignore */
import PropTypes from "prop-types";
import style from "./NavBar.module.css";
import * as consts from "../../../consts";
import { FaDiscord, FaGithub } from "react-icons/fa";

export const NavBar = () => {
  return (
    <div className="bg-white w-full rounded">
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">{consts.APP.name}</a>
        </div>
        <div className="flex-none gap-2">
          <button className="btn btn-ghost btn-circle">
            <FaDiscord className="text-xl" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <FaGithub className="text-xl" />
          </button>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
            <li>
              <a>Settings</a>
            </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>{" "}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <button className="btn btn-circle btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </button>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Open Document
                </a>
              </li>
              <li>
                <a>Export as PDF</a>
              </li>
              <li>
                <a>Export as Word File</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {};

NavBar.defaultProps = {};
