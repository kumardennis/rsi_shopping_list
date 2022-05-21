import OfferBanner from "Components/OfferBanner/OfferBanner";
import React from "react";
import "./styles.scss";

type OfferObject = {
  imageSrc: string;
  offerTitle: string;
  offerDescription: string;
};

const offerObject1: OfferObject = {
  imageSrc:
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  offerTitle: "20% Off Womens Clothing",
  offerDescription:
    "Deals you simply cannot miss! Discounts on womens clothing items today!",
};

const offerObject2: OfferObject = {
  imageSrc:
    "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  offerTitle: "20% Off Womens Clothing",
  offerDescription:
    "Deals you simply cannot miss! Discounts on womens clothing items today!",
};

const OfferBanners = (): JSX.Element => {
  return (
    <div className="offer-banner-container">
      <OfferBanner
        index={0}
        imageSrc={offerObject1.imageSrc}
        offerTitle={offerObject1.offerTitle}
        offerDescription={offerObject1.offerDescription}
      />
      <OfferBanner
        index={1}
        imageSrc={offerObject2.imageSrc}
        offerTitle={offerObject2.offerTitle}
        offerDescription={offerObject2.offerDescription}
      />
    </div>
  );
};

export default OfferBanners;
