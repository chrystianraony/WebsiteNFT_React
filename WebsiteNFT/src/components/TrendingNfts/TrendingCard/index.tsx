import React from "react";
import "./trendingCard.css";

const TrendingCard = (props) => {
  const { nft } = props;
  return (
    <div className="trending-card absolute-center">
      <div className="tc-inner-wrapper">
        <div className="tc-content">
          <img alt={nft.user_name} src={nft.banner} className="tc-banner" />
          <div className="tc-user-info">
            <div className="tc-ui-left">
              <img
                alt={nft.user_name}
                className="tc-user-logo"
                src={nft.user_photo}
              />
              <div>
                <div className="tc-ui-username">{nft.user_name}</div>
                <div className="tc-ui-userhandle">{nft.userhandle}</div>
              </div>
            </div>
            <img
              src="https://openseauserdata.com/files/265128aa51521c90f7905e5a43dcb456_new.svg"
              alt="ETH on Polygon"
              className="tc-eth-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrendingCard;
