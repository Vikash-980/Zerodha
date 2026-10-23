import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
const Productpage = () => {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://kite.zerodha.com/"
        learnMore="https://zerodha.com/products/kite/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/kite-by-zerodha/id1449453802"
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        linkValue="Learn more"
      />

      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="https://zerodha.com/varsity/"
        learnMore="https://zerodha.com/varsity/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1476992592"
      />
      <RightSection
        imageURL="media/images/landing.svg"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        linkValue="Kite Connect"
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="https://coin.zerodha.com/"
        learnMore="https://zerodha.com/products/coin/"
        googlePlay="https://play.google.com/store/search?q=zerodha%20coin&c=apps"
        appStore="https://apps.apple.com/in/search?term=zerodha%20coin"
      />
      <p className="text-center fs-4">Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/">Zerodha.tech</a> blog.</p>
      <Universe />
    </div>
  );
};

export default Productpage;
