import { memo } from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import style from "./Header.module.scss";
import { Search } from "./Search/Search";
import { Config } from "../../../Config/Config";

const cx = className.bind(style);
const Header = () => {
  return (
    <div className={cx("swapper")}>
      <Link to={Config.home} style={{ color: "#000" }}>
        <h1>Food Recipes</h1>
      </Link>

      <Search />
    </div>
  );
};

export default memo(Header);
