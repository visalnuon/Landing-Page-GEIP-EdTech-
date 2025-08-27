"use client";
import Home from "./Home/page";
import FeaturesSection from "./feature/page";
import React from "react";
import Extra from "./exptra/extra";
import Team from "./team/Team";
import Partner from "./partner/Partner";

function page() {
  return (
    <div>
      <Home />
      <Extra/>
      <FeaturesSection/>
      <Team/>
      <Partner/>
    </div>
  );
}

export default page;