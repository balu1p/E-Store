
import { useEffect } from "react";
import Card from "./Card";
import {  DataHandle } from "../utils/DataContext";


const Body = () => {
const {sorted,value} = DataHandle();

useEffect(()=>{},[sorted,value])
  return (
    <div className="flex flex-wrap justify-evenly gap-12 bg-slate-50">
    {
        sorted.map((product)=>{
            return <Card {...product} key={product.id}/>
        })
    }
    </div>
  );
};

export default Body;
