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
      <div className="tf-right">
        <div className="tf-r-bg-blob"></div>
        <div className="tf-right-diamond">
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              alt="diamond-banner"
              src="https://i.seadn.io/gae/ZnOR66ksHXCRZEDwPjWosxeTDhs8k650egL6DARINjsW0VL8G9f4g-U0Hk0spLK5gjB7u86_HIuH1CH98kZ9d_47iKLva75tTOYxYw?auto=format&w=128"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              alt="diamond-banner"
              src="https://i.seadn.io/gcs/files/543630193cf32ac09c0356e767d2891e.gif?auto=format&w=128"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              alt="diamond-banner"
              src="https://i.seadn.io/gcs/files/9f8113bbed895f5c8a946cd7305a50fc.gif?auto=format&w=128"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              alt="diamond-banner"
              src="https://i.seadn.io/gae/XvTMloYdyEv8jP17LB2_Ik_8ojbn8Of0fEr6j2fUjvqD3EtXVjqZ5szAoHmeYOQqccLaifqt4hcmcDS1S9gu7hMmw6Ad5asMUd1f?auto=format&w=128"
            />
          </div>

        </div>
      </div>
    </div>
  );
};
