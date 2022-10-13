import React from "react";
import { Button } from "../../common/Button";
import "./topfold.css";

export const TopFold = () => {
  return (
    <div className="topfold absolute-center">
      <div className="tf-left">
        <div className="tf-heading">
          Discover collect, & sell {""}
          <span className="heading-gradient">Extraordinary</span> NFTs
        </div>
        <div className="tf-description">
          please make sure that you are buying and selling the most trending
          nfts out there.
        </div>
        <div className="tf-left-btns">
          <Button btnType="PRIMARY" btnText="Explore" />
          <Button
            btnType="SECONDARY"
            btnText="Create"
            customClass="tf-left-secondary-btn"
          />
        </div>
        <div className="tf-left-infoStats">
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">300K+</div>
            <div className="tf-infoItem-label">Collections</div>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">5k+</div>
            <div className="tf-infoItem-label">Artists</div>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">398K+</div>
            <div className="tf-infoItem-label">Community</div>
          </div>
        </div>
      </div>
      <div className="tf-right"></div>
    </div>
  );
};
