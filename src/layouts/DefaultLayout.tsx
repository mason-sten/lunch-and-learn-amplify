import React from "react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../ui/routes";

interface Props {
  children: JSX.Element;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="border-b fixed w-full bg-gray-800">
        <nav className="flex justify-between mx-auto max-w-screen-lg">
          <div className="flex space-x-2 items-center">
            <NavLink className="nav-link" to={routes.root.path} exact>
              Home
            </NavLink>
            <NavLink className="nav-link" to={routes.feed.path}>
              Recent Posts
            </NavLink>
            <NavLink className="nav-link" to={routes.reportNew.path}>
              Report Suspicious Activity
            </NavLink>
          </div>
          <div className="flex space-x-2 items-center">
            <Link className="btn-primary" to={routes.root.path}>
              Login / Sign up
            </Link>
          </div>
        </nav>
      </div>
      <div className="max-w-screen-lg mx-auto pt-[73px]">
        <div className="px-2 py-8">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
