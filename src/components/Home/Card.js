import { useContext } from "react";
import { DataHandle } from "../utils/DataContext";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { deleteItem } = DataHandle();
  const { image, title, price, rating, id } = props;

  return (
    <div className="w-64 md:w-80 p-4 m-2 mt-8 bg-white rounded-lg hover:shadow-md hover:scale-110 duration-1000">
      <Link to={`/product/${id}`}>
        <img
          className="w-48 md:w-80 h-48 object-cover rounded-lg"
          src={image}
          alt={title}
        />
      </Link>
      <h3 className="mt-2 text-xl font-semibold">
        {title.length >= 25 ? title.slice(0, 25) + "..." : title}
      </h3>
      <p className="mt-2 text-gray-900 font-bold">
        <span className="text-xl">Price : </span> ${price}
      </p>
      <div className="flex items-center mt-1">
        <span className="text-black font-bold">Rating:</span>
        <span className="ml-1">{rating?.rate}</span>
      </div>
      <button
        className="flex ml-60 bg-red-500 m-1 px-2"
        onClick={() => deleteItem(id)}
      >
        X
      </button>
    </div>
  );
};

export default Card;
