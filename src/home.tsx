import { CardRoute } from "./components/card";
import { FooterRoute } from "./components/footer";
import { Herocomponent } from "./components/hero";
import Logo from ".//assets/gogetterlogo.svg";
import { useState } from "react";

export function HomeRoute() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-secondary text-white py-4 px-6 flex justify-between items-center">
        <div>
          {/* Logo */}
          <img src={Logo} alt="Go Getter Logo" className="w-16 h-16 object-contain" />
        </div>
        <div>
          {/* Hamburger Icon (Visible on small devices) */}
          <button className="sm:hidden text-white text-3xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Navigation Menu */}
          <nav className={`${isOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-secondary sm:block sm:static sm:flex sm:space-x-6`}>
            <a href="#success-stories" className="block px-6 py-2 hover:underline">
              Home
            </a>
            <a href="#resources" className="block px-6 py-2 hover:underline">
              Success Stories
            </a>
            <a href="#about" className="block px-6 py-2 hover:underline">
              About
            </a>
            <a href="https://wa.me/message/ZX7P5C5NH2GPA1?src=qr" className="block px-6 py-2 hover:underline">
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <Herocomponent />
        <CardRoute />
      </main>

      {/* Footer */}
      <FooterRoute />
    </div>
  );
}
