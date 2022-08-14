import { createContext, useState } from "react";

export const DataContext = createContext();
const Providers = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataItem, setDataItem] = useState({});
  const value = {
    data,
    setData,
    dataItem,
    setDataItem,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default Providers;
