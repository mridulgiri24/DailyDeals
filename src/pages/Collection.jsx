import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import Contact from "../components/Contact";

export default function Collection() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProdcts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  const [search, setSearch] = useState("");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProdcts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 mt-20">
        {/* filter options */}
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="mb-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS
            {showFilter ? (
              <i className="fa-solid fa-angle-down sm:hidden"></i>
            ) : (
              <i className="fa-solid fa-angle-right sm:hidden"></i>
            )}
          </p>
          {/* category filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 sm:block ${
              showFilter ? "" : "hidden"
            }`}
          >
            <h4 className="mb-3 font-medium">CATEGORIES</h4>
            <div className="flex flex-col gap-2 text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-3 cursor-pointer"
                  type="checkbox"
                  id="Men"
                  value="Men"
                  onClick={toggleCategory}
                />
                <label className="cursor-pointer" htmlFor="Men">
                  Men
                </label>
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3 cursor-pointer"
                  type="checkbox"
                  id="Women"
                  value="Women"
                  onClick={toggleCategory}
                />
                <label className="cursor-pointer" htmlFor="Women">
                  Women
                </label>
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3 cursor-pointer"
                  type="checkbox"
                  id="Kids"
                  value="Kids"
                  onClick={toggleCategory}
                />
                <label className="cursor-pointer" htmlFor="Kids">
                  Kids
                </label>
              </p>
            </div>
          </div>

          {/* Type filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 sm:block ${
              showFilter ? "" : "hidden"
            }`}
          >
            <h4 className="mb-3 font-medium">TYPE</h4>
            <div className="flex flex-col gap-2 text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-3 cursor-pointer"
                  type="checkbox"
                  id="Topwear"
                  value="Topwear"
                  onClick={toggleSubCategory}
                />
                <label className="cursor-pointer" htmlFor="Topwear">
                  Topwear
                </label>
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3 cursor-pointer"
                  type="checkbox"
                  id="Bottomwear"
                  value="Bottomwear"
                  onClick={toggleSubCategory}
                />
                <label className="cursor-pointer" htmlFor="Bottomwear">
                  Bottomwear
                </label>
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3 cursor-pointer"
                  type="checkbox"
                  id="Winterwear"
                  value="Winterwear"
                  onClick={toggleSubCategory}
                />
                <label className="cursor-pointer" htmlFor="Winterwear">
                  Winterwear
                </label>
              </p>
            </div>
          </div>

          {/* product sort */}
          <div>
            <select
              className={`border border-gray-300 mt-6 outline-none
              px-2 h-10 w-full sm:block ${showFilter ? "" : "hidden"}`}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
        </div>

        {/* right side */}
        <div className="flex-1">
          {/* product search */}
          <div
            className="flex justify-between rounded-full items-center
          w-full mt-5 sm:mt-0 border border-gray-600"
          >
            <input
              className="h-9 w-[90%] rounded-full ml-5 outline-none
              text-gray-700"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <i
              className="fa-solid fa-magnifying-glass
            pr-5 text-gray-600"
            ></i>
          </div>
          {/* map all products */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-4 gap-y-6 mt-5"
          >
            {filterProdcts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
