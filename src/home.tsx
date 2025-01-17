import { CardRoute } from "./components/card";
import { FooterRoute } from "./components/footer";
import { Herocomponent } from "./components/hero";
import Logo from ".//assets/gogetterlogo.svg";
import { useState } from "react";
import { Testimonials } from "./components/testimonials";
import { PricingCards } from "./components/price";
import { ListEvent } from "./components/events";

export function HomeRoute() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" bg-gray-50">
      {/* Header */}
      <header className=" bg-white text-black flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <div>
          {/* Logo */}
          <img src={Logo} alt="Go Getter Logo" className="w-16 h-16 object-contain" />
        </div>
        <div>
          {/* Hamburger Icon (Visible on small devices) */}
          <button className="sm:hidden text-black text-3xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Navigation Menu */}
          <nav className={`${isOpen ? "block" : "hidden"} absolute top-16 left-0 w-full  sm:static sm:flex sm:space-x-6 px-6`}>
            <a href="#home" className="block px-6 py-2 hover:underline">
              Home
            </a>
            <a href="#stories" className="block px-6 py-2 hover:underline">
              Success Stories
            </a>
            <a href="#events" className="block px-6 py-2 hover:underline">
              Events
            </a>
            <div className="bg-primary text-white rounded hover:bg-yellow-500 transition">
              <a href="https://wa.me/message/ZX7P5C5NH2GPA1?src=qr" className="block px-6 py-2">
                Contact Us
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="my-6 bg-gr">
        <Herocomponent />
        <CardRoute />
        <PricingCards />
        <Testimonials />
        <ListEvent />
      </main>

      {/* Footer */}
      <FooterRoute />
    </div>
  );
}
