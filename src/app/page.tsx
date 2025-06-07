"use client"

import Navigation from "@/widgets/Navigation/navigation";
import Header from "@/widgets/Header/header";
import WhatWeDo from "@/widgets/WhatWeDo/whatWeDo";
import OurWork from "@/widgets/OurWork/ourWork";

export default function Home() {
  return (
    <>
      <header>
          <Navigation />
          <Header />
      </header>
      <main>
        <WhatWeDo />
        <OurWork />
      </main>

    </>
  );
}
