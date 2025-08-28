"use client";
import React from "react";
import { HeroParallax } from "./HeroParallax"; // path must match the folder

export const HeroParallaxDemo = () => {
  return <HeroParallax products={products} />;
};

export const products = [
  { title: "Moonbeam", link: "https://gomoonbeam.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png" },
  { title: "Cursor", link: "https://cursor.so", thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png" },
  // add remaining products here
];
