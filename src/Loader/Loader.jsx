import React from "react";
import "./Loader.css";
import loader from './Anime.gif'
import loading from './Loading.gif'

const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        {/* copy svg image and past it here */}
        <img src={loader} alt="" />
        <div className="loading-text">
            <img src={loading} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Loader;