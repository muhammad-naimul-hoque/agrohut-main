import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import ProductList from "../components/ProductList";
import BottomBanner from "../components/BottomBanner";

const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner></MainBanner>
      <Categories></Categories>
      <BestSeller></BestSeller>
      <BottomBanner></BottomBanner>
      {/* <ProductList></ProductList> */}
    </div>
  );
};

export default Home;
