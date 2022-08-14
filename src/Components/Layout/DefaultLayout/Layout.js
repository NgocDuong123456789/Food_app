import React from "react";
import Header from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import className from "classnames/bind";
import style from "./Layout.module.scss";

const cx = className.bind(style);

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={cx("swapper")}>
        <Sidebar />
        <div className={cx("container")}>{children}</div>
      </div>
    </div>
  );
};
