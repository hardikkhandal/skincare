import React, { useState } from "react";
import { Poppins } from "next/font/google";
import NumCard from "../utils/NumCard";
import "../Style/NumCardStyle.css"

export default function Numbers() {
  return (
    <>
      <div className="numbers-main">
        <NumCard number={6} suffix = "" desc="Full time developers" />
        <NumCard number={60} suffix = "+"  desc="Qualified dermatologists" />
        <NumCard number={7} suffix = "" desc="Partnered healthcentres" />
        <NumCard number={280} suffix = "+" desc="Daily online consumers" />
        <NumCard number={98} suffix = "%" desc="Positive user reviews" />
      </div>
    </>
  );
}
