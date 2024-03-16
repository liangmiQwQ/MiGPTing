"use client";
import React from "react";
import createI18n from "@/language/i18n";

export default function Loader() {
  createI18n(process.env.language as any);
  return <></>;
}
