import React from "react";
import AboutProgram from "../Components/AboutProgram/AboutProgram";
import HowProgramWorks from "../Components/HowProgramWorks/HowProgramWorks";
import LandingPage from "../Components/LandingPage/LandingPage";
import ReviewsInLanding from "../Components/ReviewsInLanding";
import Timeline from "../Components/Timeline/Timeline";

export default () => {
  return (
    <>
      <LandingPage />
      <AboutProgram />
      <HowProgramWorks />
      <Timeline />
      <ReviewsInLanding />
    </>
  );
};