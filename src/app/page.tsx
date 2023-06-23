"use client";
import React from "react";
import { MainContent } from "@/components/MainContent";
import reportAccessibility from "@/utils/reportAccessibility";

export default function Home() {
  reportAccessibility(React);
  return <MainContent />;
}
