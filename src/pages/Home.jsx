import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import ProductList from "../components/ProductList";
import BottomBanner from "../components/BottomBanner";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner></MainBanner>
      <Categories></Categories>
      <BestSeller></BestSeller>
      <BottomBanner></BottomBanner>
      <NewsLetter></NewsLetter>
      {/* <ProductList></ProductList> */}
    </div>
  );
};

export default Home;
