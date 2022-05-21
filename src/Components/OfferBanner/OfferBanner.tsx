import React from "react";
import "./styles.scss";

type Props = {
  imageSrc: string;
  offerTitle: string;
  offerDescription: string;
  index: number;
};

const OfferBanner = ({
  imageSrc,
  offerTitle,
  offerDescription,
  index,
}: Props): JSX.Element => {
  return (
    <>
      <div className="offer-banner">
        {index % 2 === 0 && (
          <div className="offer-image">
            <img src={imageSrc} alt={offerTitle} />
          </div>
        )}
        <div className="offer-content">
          <h2 className="offer-title">
            <a href="#">{offerTitle}</a>
          </h2>
          <div className="offer-description">{offerDescription}</div>
        </div>
        {index % 2 !== 0 && (
          <div className="offer-image">
            <img src={imageSrc} alt={offerTitle} />
          </div>
        )}
      </div>
    </>
  );
};

export default OfferBanner;
