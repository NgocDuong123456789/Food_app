import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "tippy.js/dist/tippy.css";
import HeadlessTippy from "@tippyjs/react/headless";
import className from "classnames/bind";
import style from "./Search.module.scss";
import { DataItem } from "../../../../Redux/Action/MenuFood";
import { SearchItem } from "./SearchItem";
const cx = className.bind(style);

export const Search = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [value, setValue] = useState("");
  const data = useSelector((state) => state.Food);
  const menudata = JSON.parse(localStorage.getItem("menudata"));
  const handleClick = (e) => {
    e.preventDefault();
    if (!e.target.value.startsWith(" ")) setValue(e.target.value);
  };
  const dataSearch = menudata.filter((item) =>
    item.strMeal.toLowerCase().startsWith(value.toLowerCase())
  );

  const handleClickFood = (searchFood) => {
    dispatch(DataItem(searchFood));

    // localStorage.setItem("data", JSON.stringify(searchFood));
    setShow(false);
    setValue("");
    inputRef.current.focus();
  };
  const handleResult = () => {
    setShow(false);
  };

  const handleFocus = () => {
    setShow(true);
  };

  return (
    <div className={cx("Search")}>
      <form>
        <HeadlessTippy
          placement="bottom-start"
          interactive
          delay={[100, 200]}
          visible={dataSearch.length > 0 && value !== "" && show}
          render={(attrs) => (
            <div tabIndex="-1" {...attrs} className={cx("search-result")}>
              {dataSearch.map((item, index) => {
                return (
                  <div key={index}>
                    <SearchItem
                      searchFood={item}
                      handleClickFood={handleClickFood}
                    />
                  </div>
                );
              })}
            </div>
          )}
          onClickOutside={handleResult}
        >
          <input
            ref={inputRef}
            placeholder="Meal Food..."
            type="text"
            onChange={handleClick}
            value={value}
            onFocus={handleFocus}
          />
        </HeadlessTippy>
      </form>
    </div>
  );
};
