import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FoodComponent } from "./Components/Router/Router";
import { Layout } from "./Components/Layout/DefaultLayout/Layout";
import className from "classnames/bind";
import style from "./App.module.scss";

const cx = className.bind(style);
function App() {
  return (
    <BrowserRouter>
      <div className={cx("swapper")}>
        <Routes>
          {FoodComponent.map((food, index) => {
            const LayoutItem = food.check ? Fragment : Layout;
            const Components = food.component;
            return (
              <Route
                key={index}
                path={food.path}
                element={
                  <LayoutItem>
                    <Components />
                  </LayoutItem>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
