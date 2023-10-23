import { useParams } from "react-router-dom";
import { DataHandle } from "../utils/DataContext";
import { useState, useEffect } from "react";

const Info = () => {
  const [data, setData] = useState({})
const {id}= useParams()
const {sorted} = DataHandle();
console.log(sorted);
const productInfo = (id) => {
  for (const product of sorted) {
    if (product.id == id) {
      return product;
    }
  }
}
useEffect(() => {
  setData(productInfo(id));
}, [])
    console.log(data);
    return (
      <div className="flex items-center justify-center h-screen bg-slate-100">
        <div className="bg-white rounded-lg shadow-md flex w-3/4">
          <img
            src={data?.image}
            alt=""
            className="w-52 rounded-l-lg"
          />
          <div className="w-1/2 p-4 mt-14 ml-20">
            <h1 className="text-2xl font-semibold mb-2 ">{data?.title}</h1>
            <p className="text-gray-700 mb-4 text-center">{data?.description}</p>
            <p className="text-lg font-bold text-blue-600 text-center">Price : ${data?.price}</p>
            <p className="font-bold text-center text-orange-400">Rating : {data?.rating?.rate}</p>
          </div>
        </div>
      </div>
    );
};
export default Info;

