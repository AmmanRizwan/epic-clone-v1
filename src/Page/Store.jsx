import React from "react";
import ExclusiveBanner from "../Component/ExclusiveBanner/ExclusiveBanner";
import DiscoverNow from "../Component/DiscoverNow/DiscoverNow";
import HotDeal from "../Component/HotDeal/HotDeal";
import FeatureDiscount from "../Component/FeatureDiscount/FeatureDiscount";
import Offer from "../Component/Offer/Offer";
import Creator from "../Component/Creator/Creator";
import TopRelease from "../Component/TopRelease/TopRelease";
import ExclusiveOffer from "../Component/ExclusiveOffer/ExclusiveOffer";

const Store = () => {
  return (
    <div className="store">
      <ExclusiveBanner />
      <DiscoverNow />
      <FeatureDiscount />
      <HotDeal/>
      <Offer />
      <Creator />
      <TopRelease />
      <ExclusiveOffer />
    </div>
  )
}

export default Store;