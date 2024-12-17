"use client";

// pages/page.tsx
import Image from "next/image";
import { Midsec } from "./components/Midsec";
import { Navbar } from "./components/Navbar";
import { Roadmap } from "./components/Roadmap";
import { Games } from "./components/Games";
import { Faqs } from "./components/Faqs";
import { Contact } from "./components/Contact";
import { useDisableRightClick } from "./components/UseDisableRightClick"; // Import the custom hook
import Head from "next/head";

export default function Home() {
  // Disable right-click on this page
  useDisableRightClick();

  return (
    <>
      <main>
        <div className="relative">
          <Navbar />
          <Midsec />
        </div>
        <Roadmap />
        <Games />
        <Faqs />
        <Contact />
      </main>
    </>
  );
}
