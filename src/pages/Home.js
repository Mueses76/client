import React from "react";
import { Helmet } from "react-helmet";
import MainBanner from "../components/Web/MainBanner";
import HomeLibros from "../components/Web/HomeLibros";
import HowToLearn from "../components/Web/HowToLearn";
import ReviewsLibros from "../components/Web/ReviewsLibros";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Cata-Book</title>
        <meta
          name="description"
          content="Home | Web sobre programación"
          data-react-helmet="true"
        />
      </Helmet>
      <MainBanner />
      <HomeLibros />
      <HowToLearn />
      <ReviewsLibros />
    </>
  );
}
