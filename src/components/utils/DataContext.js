import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const DataContext = createContext();
export function DataHandle() {
  return useContext(DataContext);
}

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [value, setValue] = useState(0);

  const handleData = async () => {
    const apiData = await axios.get("https://fakestoreapi.com/products");
    let newData = localStorage.getItem("items");
    if (newData) {
      setData([...apiData?.data, ...JSON.parse(newData)]);
      setSorted([...apiData?.data, ...JSON.parse(newData)]);
    } else {
      setData(apiData?.data);
      setSorted(apiData?.data);
    }
  };
  useEffect(() => {
    handleData();
  }, []);

  const sortData = (val) => {
    setValue(val);
    if (val === -1) setSorted([...sorted].sort((a, b) => a.price - b.price));
    else if (val === 1)
      setSorted([...sorted].sort((a, b) => b.price - a.price));
    else if (val === 0) setSorted([...data]);
    console.log(sorted);
  };

  const deleteItem = (id) => {
    for (let i of data) {
      if (i.id == id) {
        let index1 = data.indexOf(i);
        data.splice(index1, 1);
        setData([...data]);
      }
    }
    for (let i of sorted) {
      if (i.id == id) {
        let index1 = sorted.indexOf(i);
        console.log(index1);
        sorted.splice(index1, 1);
        setSorted([...sorted]);
      }
    }
  };

  useEffect(() => {}, [sorted]);

  return (
    <DataContext.Provider value={{ sorted, value, sortData, deleteItem }}>
      {children}
    </DataContext.Provider>
  );
};
