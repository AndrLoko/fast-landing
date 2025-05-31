import Navigation from "@/widgets/Navigation/navigation";
import Header from "@/widgets/Header/header";
import WhatWeDo from "@/widgets/WhatWeDo/whatWeDo";

export default function Home() {
  return (
    <>
      <header>
          <Navigation />
          <Header />
      </header>
      <main>
        <WhatWeDo />
      </main>
    </>
  );
}
