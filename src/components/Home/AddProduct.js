import { useState } from "react";
import { v4 as uuid } from 'uuid';

const AddProduct = () => {
  const unique_id = uuid();
  console.log(unique_id);
  const small_id = unique_id.slice(0,8);
  const [newProduct, setNewProduct] = useState({});
  const handelData = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.id]: e.target.value,
      id: small_id,
    });
  };
  const submitData = (e) => {
    e.preventDefault();
    const items = localStorage.getItem("items");
    console.log(typeof JSON.parse(items));
    if (items)
      localStorage.setItem(
        "items",
        JSON.stringify([...JSON.parse(items), newProduct])
      );
    else localStorage.setItem("items", JSON.stringify([newProduct]));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-b-4 p-4 w-80">
        <img
          src={newProduct.image}
          alt="Product Image"
          className="w-full h-auto rounded-lg border border-b-0"
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-2/5">
        <div className="flex">
          <div className="w-1/2">
            <form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="id" className="mb-2">
                  Id
                </label>
                <input
                  type="text"
                  id="id"
                  value={small_id}
                  className="border-b p-2 outline-none"
                  placeholder="Id"
                  onChange={handelData}
                />
                <label htmlFor="image" className="mb-2">
                  Image
                </label>
                <input
                  type="text"
                  id="image"
                  className="border-b p-2 outline-none"
                  placeholder="Image URL"
                  onChange={handelData}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="heading" className="mb-2">
                  Heading
                </label>
                <input
                  type="text"
                  id="title"
                  className="border-b p-2 outline-none"
                  placeholder="Heading"
                  onChange={handelData}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="description" className="mb-2">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  className="border-b p-2 outline-none"
                  placeholder="Description"
                  onChange={handelData}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="price" className="mb-2">
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  className="border-b p-2 outline-none"
                  placeholder="Price"
                  onChange={handelData}
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={submitData}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
